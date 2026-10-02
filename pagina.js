/*
 * Enoc Explicado — comportamento próprio da página.
 * O motor (sites-incriveis.js) cuida das revelações, cenas fixas e fundos.
 * Aqui vive o que é só desta página:
 *   1. el hilo de oro — o fio que a rolagem desenha e que amarra Enoc à Bíblia
 *   2. o pico — texto antigo → página explicada (fio local, véu de pergaminho)
 *   3. o códice que folheia, a pilha de bônus, o céu de 108 estrelas, o selo
 *   4. tinta do título, textura, tom do acento, troca pelos materiais reais
 */
(function () {
  "use strict";

  var doc = document;
  var raiz = doc.documentElement;
  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fino = window.matchMedia("(pointer: fine)").matches;

  function qs(s, el) { return (el || doc).querySelector(s); }
  function qsa(s, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(s)); }
  function limitar(v, a, b) { return v < a ? a : v > b ? b : v; }
  function f1(n) { return Math.round(n * 10) / 10; }

  /* ---------- textura de papel / filme ---------- */

  function grano() {
    var lado = 160;
    var c = doc.createElement("canvas");
    c.width = c.height = lado;
    var g = c.getContext("2d");
    var img = g.createImageData(lado, lado);
    for (var i = 0; i < img.data.length; i += 4) {
      var v = (Math.random() * 255) | 0;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 40 + ((Math.random() * 70) | 0);
    }
    g.putImageData(img, 0, 0);
    raiz.style.setProperty("--grano", "url(" + c.toDataURL("image/png") + ")");
  }

  /* ---------- tom do acento (ouro claro no escuro, ouro fundo no pergaminho) ---------- */

  var metaCor = qs('meta[name="theme-color"]');

  function luminancia(hex) {
    var h = hex.replace("#", "");
    if (h.length === 3) h = h.replace(/(.)/g, "$1$1");
    var n = parseInt(h, 16);
    return (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
  }

  function tono() {
    var fundo = raiz.style.getPropertyValue("--fx-fundo").trim();
    if (!fundo) return;
    var novo = luminancia(fundo) > 0.5 ? "claro" : "oscuro";
    if (raiz.dataset.tono !== novo) raiz.dataset.tono = novo;
    if (metaCor && metaCor.content !== fundo) metaCor.content = fundo;
  }

  /* ---------- materiais reais: entram sozinhos quando listados em materiais/lista.json ---------- */

  function materiais() {
    if (!window.fetch) return;
    fetch("materiais/lista.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (lista) {
        if (!Array.isArray(lista) || !lista.length) return;
        qsa("[data-material]").forEach(function (slot) {
          var nome = slot.dataset.material;
          if (lista.indexOf(nome) < 0) return;
          var img = new Image();
          img.className = "material";
          img.alt = slot.dataset.alt || "";
          img.decoding = "async";
          img.onload = function () {
            slot.appendChild(img);
            slot.classList.add("con-material");
            agendar();
          };
          img.src = "materiais/" + nome;
        });
      })
      .catch(function () {});
  }

  /* ---------- tinta: o título embebe o papel, letra por letra ---------- */

  function tinta() {
    if (reduzido) return;
    var atraso = 120;
    qsa(".tinta").forEach(function (bloco) {
      var nos = [];
      var andador = doc.createTreeWalker(bloco, NodeFilter.SHOW_TEXT);
      var no;
      while ((no = andador.nextNode())) nos.push(no);
      nos.forEach(function (n) {
        var frag = doc.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(function (pedaco) {
          if (!pedaco) return;
          if (/^\s+$/.test(pedaco)) { frag.appendChild(doc.createTextNode(" ")); return; }
          var palavra = doc.createElement("span");
          palavra.style.display = "inline-block";
          palavra.style.whiteSpace = "nowrap";
          palavra.setAttribute("aria-hidden", "true");
          pedaco.split("").forEach(function (ch) {
            var s = doc.createElement("span");
            s.className = "letra";
            s.textContent = ch;
            s.style.setProperty("--d", String(atraso + ((Math.random() * 120) | 0)));
            atraso += 26;
            palavra.appendChild(s);
          });
          frag.appendChild(palavra);
        });
        n.parentNode.replaceChild(frag, n);
      });
    });
  }

  /* ---------- rolagem suave (só mouse/trackpad, nunca no toque) ---------- */

  var lenis = null;

  function rolagemSuave() {
    if (reduzido || !fino || !window.Lenis) return;
    lenis = new window.Lenis({ autoRaf: true, anchors: true, lerp: 0.11, wheelMultiplier: 0.95 });
  }

  doc.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || lenis) return;
    var alvo = doc.getElementById(a.getAttribute("href").slice(1));
    if (!alvo) return;
    e.preventDefault();
    alvo.scrollIntoView({ behavior: reduzido ? "auto" : "smooth", block: "start" });
  });

  /* ═══════════════ 1. EL HILO DE ORO ═══════════════ */

  var NS = "http://www.w3.org/2000/svg";
  var fio = {
    svg: qs("#hilo"),
    trazo: qs("#hilo .hilo-trazo"),
    punta: qs("#hilo .hilo-punta"),
    halo: qs("#hilo .hilo-halo"),
    tom: qs("#hilo-tono"),
    medidor: null,
    marcas: [],
    total: 0,
    largura: 0,
    altura: 0,
    pronto: false
  };

  function posDoc(el) {
    var x = 0, y = 0, n = el;
    while (n) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    return { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight };
  }

  function larguraUtil() { return raiz.clientWidth; }
  function ehMovil() { return larguraUtil() < 700; }

  // x do "trilho": a margem por onde o fio corre entre um nó e outro
  function trilho() {
    var vw = larguraUtil();
    if (vw < 700) return 11;
    var margem = limitar(vw * 0.05, 24, 72);
    var conteudo = Math.min(vw - 2 * margem, 1240);
    return Math.max(22, (vw - conteudo) / 2 - 38);
  }

  // curva suave por todos os pontos (Catmull-Rom não uniforme → Bézier cúbica)
  function segmentos(pts) {
    var segs = [];
    function dist(a, b) { return Math.hypot(b[0] - a[0], b[1] - a[1]) || 0.0001; }
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      var d01 = i === 0 ? dist(p1, p2) : dist(p0, p1);
      var d12 = dist(p1, p2);
      var d23 = i + 2 >= pts.length ? dist(p1, p2) : dist(p2, p3);
      var k1 = d12 / (3 * (d01 + d12));
      var k2 = d12 / (3 * (d12 + d23));
      var c1x = p1[0] + (p2[0] - p0[0]) * k1, c1y = p1[1] + (p2[1] - p0[1]) * k1;
      var c2x = p2[0] - (p3[0] - p1[0]) * k2, c2y = p2[1] - (p3[1] - p1[1]) * k2;
      segs.push("C" + f1(c1x) + " " + f1(c1y) + " " + f1(c2x) + " " + f1(c2y) + " " + f1(p2[0]) + " " + f1(p2[1]));
    }
    return segs;
  }

  function construirFio() {
    if (!fio.svg) return;
    var vw = larguraUtil(), vh = window.innerHeight;
    var movil = ehMovil();
    var xr = trilho();
    var pts = [];
    var marcas = [];

    function por(x, y) {
      var ult = pts[pts.length - 1];
      if (ult && Math.abs(ult[0] - x) < 0.5 && Math.abs(ult[1] - y) < 0.5) return;
      pts.push([x, y]);
    }

    qsa("[data-hilo]").forEach(function (el) {
      if (!el.offsetParent) return; // escondido
      var p = posDoc(el);
      var tipo = (movil && el.dataset.hiloMovil) || el.dataset.hilo;
      var lado = el.dataset.hiloLado || "centro";
      var cx = p.x + p.w / 2, cy = p.y + p.h / 2;
      var dx = parseFloat(el.dataset.hiloDx || "0");

      if (tipo === "nada") {
        return;
      } else if (tipo === "riel") {
        por(xr, p.y);
      } else if (tipo === "inicio") {
        por(cx, cy);
      } else if (tipo === "punto") {
        por((lado === "izq" ? p.x : lado === "der" ? p.x + p.w : cx) + dx, cy);
      } else if (tipo === "nudo") {
        // desce, atravessa o ilhós, dá uma volta por cima e segue
        var r = Math.max(10, p.w * 0.55);
        por(cx - r * 0.6, cy - r * 4.2);
        por(cx, cy);
        por(cx + r * 1.7, cy - r * 0.9);
        por(cx + r * 0.6, cy - r * 2.5);
        por(cx - r * 1.3, cy - r * 1.4);
        por(cx - r * 0.9, cy + r * 0.2);
      } else if (tipo === "fin") {
        por(xr, cy);
        por(p.x - 2, cy);
      }
      marcas.push({ idx: pts.length - 1, nudo: el.dataset.nudo || null, y: pts[pts.length - 1][1] });
    });

    if (pts.length < 2) return;

    var segs = segmentos(pts);
    var d = "M" + f1(pts[0][0]) + " " + f1(pts[0][1]) + segs.join("");
    fio.trazo.setAttribute("d", d);
    fio.total = fio.trazo.getTotalLength();
    fio.trazo.style.strokeDasharray = fio.total.toFixed(1) + " " + (fio.total + 10).toFixed(1);

    // comprimento do fio em cada marca → momento da rolagem em que a agulha chega lá
    if (!fio.medidor) {
      fio.medidor = doc.createElementNS(NS, "path");
      fio.medidor.setAttribute("visibility", "hidden");
      fio.svg.appendChild(fio.medidor);
    }
    var anterior = null;
    var maxRolagem = Math.max(1, raiz.scrollHeight - vh);
    marcas.forEach(function (m) {
      fio.medidor.setAttribute("d", "M" + f1(pts[0][0]) + " " + f1(pts[0][1]) + segs.slice(0, m.idx).join(""));
      m.comp = m.idx === 0 ? 0 : fio.medidor.getTotalLength();
      m.t = m.y - vh * 0.62;
      if (anterior) m.t = Math.max(m.t, anterior.t + (m.comp - anterior.comp) * 0.35, anterior.t + 1);
      anterior = m;
    });
    // o fim precisa ser alcançável: comprime a cauda até o fim da rolagem
    var ultima = marcas[marcas.length - 1];
    if (ultima.t > maxRolagem) {
      var excesso = ultima.t - maxRolagem;
      var inicioCauda = marcas.findIndex(function (m) { return m.t > maxRolagem - vh * 1.5; });
      var base = marcas[Math.max(0, inicioCauda - 1)].t;
      marcas.forEach(function (m) {
        if (m.t > base) m.t = base + (m.t - base) * ((maxRolagem - base) / (ultima.t - base || 1));
      });
      void excesso;
    }
    fio.marcas = marcas;

    // ouro claro sobre o escuro, ouro fundo sobre o pergaminho
    var docAlt = raiz.scrollHeight;
    fio.tom.setAttribute("y2", String(docAlt));
    while (fio.tom.firstChild) fio.tom.removeChild(fio.tom.firstChild);
    qsa("[data-fx-fundo]").forEach(function (sec) {
      var p = posDoc(sec);
      var cor = luminancia(sec.dataset.fxFundo) > 0.5 ? "#8C6B2F" : "#C9A55E";
      [p.y + 60, p.y + p.h - 60].forEach(function (y) {
        var s = doc.createElementNS(NS, "stop");
        s.setAttribute("offset", limitar(y / docAlt, 0, 1).toFixed(5));
        s.setAttribute("stop-color", cor);
        fio.tom.appendChild(s);
      });
    });

    fio.largura = vw;
    fio.altura = vh;
    fio.svg.style.width = vw + "px";
    fio.svg.style.height = vh + "px";
    fio.pronto = true;
  }

  function comprimentoPara(s) {
    var m = fio.marcas;
    if (!m.length) return 0;
    if (reduzido) return fio.total;
    if (s <= m[0].t) return m[0].comp;
    for (var i = 0; i < m.length - 1; i++) {
      if (s < m[i + 1].t) {
        var t = (s - m[i].t) / (m[i + 1].t - m[i].t);
        return m[i].comp + (m[i + 1].comp - m[i].comp) * t;
      }
    }
    return fio.total;
  }

  var nos = {};
  qsa("[data-nudo-de]").forEach(function (el) {
    var k = el.dataset.nudoDe;
    (nos[k] = nos[k] || []).push(el);
  });

  function atualizarFio() {
    if (!fio.pronto) return;
    var s = window.scrollY;
    var L = limitar(comprimentoPara(s), 0, fio.total);
    fio.svg.setAttribute("viewBox", "0 " + f1(s) + " " + fio.largura + " " + fio.altura);
    fio.trazo.style.strokeDashoffset = (fio.total - L).toFixed(1);

    var pt = fio.trazo.getPointAtLength(L);
    fio.punta.setAttribute("cx", f1(pt.x));
    fio.punta.setAttribute("cy", f1(pt.y));
    fio.halo.setAttribute("cx", f1(pt.x));
    fio.halo.setAttribute("cy", f1(pt.y));
    var fim = L >= fio.total - 1;
    fio.svg.classList.toggle("fin", fim);
    fio.halo.setAttribute("r", fim ? "30" : "16");
    fio.punta.setAttribute("r", fim ? "4.2" : "3.2");

    fio.marcas.forEach(function (m) {
      if (!m.nudo || !nos[m.nudo]) return;
      var atado = L >= m.comp - 2;
      nos[m.nudo].forEach(function (el) { el.classList.toggle("atado", atado); });
    });
  }

  /* ═══════════════ 2. O PICO ═══════════════ */

  var pico = qs(".s-pico");
  var pk = pico && {
    palco: qs(".fx-palco", pico),
    antiguo: qs(".antiguo", pico),
    texto: qs(".antiguo-texto", pico),
    cartao: qs(".explicado", pico),
    ref: qs(".pico-ref", pico),
    titulo: qs(".r-despues", pico),
    cita: qs("#ref-gen6"),
    trazo: qs(".hilo-local path", pico),
    nomes: qsa(".nombre", pico)
  };

  function medirPico() {
    if (!pk) return;
    var largura = pk.palco.clientWidth;
    var altura = pk.palco.clientHeight;
    var desborde = Math.max(0, pk.texto.scrollHeight - pk.antiguo.clientHeight * 0.72);
    pico.style.setProperty("--desborde", Math.round(desborde) + "px");
    if (!ehMovil()) {
      var centro = pk.antiguo.offsetLeft + pk.antiguo.offsetWidth / 2;
      pico.style.setProperty("--centrar", Math.round(largura / 2 - centro) + "px");
    }
    var c = pk.cartao;
    pico.style.setProperty("--vt", c.offsetTop + "px");
    pico.style.setProperty("--vl", c.offsetLeft + "px");
    pico.style.setProperty("--vr", Math.max(0, largura - c.offsetLeft - c.offsetWidth) + "px");
    pico.style.setProperty("--vb", Math.max(0, altura - c.offsetTop - c.offsetHeight) + "px");
    var h = pk.texto.scrollHeight || 1;
    pk.nomes.forEach(function (n) {
      n.style.setProperty("--pos", (n.offsetTop / h).toFixed(4));
    });
  }

  function progressoDe(secao) {
    var r = secao.getBoundingClientRect();
    var percurso = secao.offsetHeight - window.innerHeight;
    return percurso > 0 ? limitar(-r.top / percurso, 0, 1) : 0;
  }

  function atualizarPico() {
    if (!pk || reduzido) return;
    var r = pico.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    var p = progressoDe(pico);
    var e = limitar((p - 0.78) / 0.09, 0, 1);
    var base = pk.palco.getBoundingClientRect();
    var a = pk.ref.getBoundingClientRect();
    var b = pk.cita.getBoundingClientRect();
    var x1 = a.left - base.left + 3, y1 = a.bottom - base.top + 10;
    var x2 = b.left - base.left - 6, y2 = b.top - base.top + b.height / 2;
    // desce pela margem (contornando o título "Con Enoc Explicado") e só então cruza até a citação
    var titulo = pk.titulo.getBoundingClientRect();
    var yb = titulo.height ? Math.max(titulo.bottom - base.top + 36, y1 + 40, y2) : y2 - 70;
    var recuo = titulo.height ? 34 : 14;
    var d = "M" + f1(x1) + " " + f1(y1) +
      " C" + f1(x1 - recuo) + " " + f1(y1 + (yb - y1) * 0.35) + " " + f1(x1 - recuo) + " " + f1(yb - 70) + " " + f1(x1 - 4) + " " + f1(yb) +
      " C" + f1(x1 + 26) + " " + f1(yb + 40) + " " + f1(x2 - Math.min(160, Math.abs(x2 - x1) * 0.4)) + " " + f1(y2 + 8) + " " + f1(x2) + " " + f1(y2);
    pk.trazo.setAttribute("d", d);
    pk.trazo.style.strokeDashoffset = (1 - e).toFixed(4);
    pk.cita.classList.toggle("atado", e >= 0.99);
  }

  /* ═══════════════ 3. Códice, bônus, céu, selo ═══════════════ */

  var codice = qs(".s-codice");
  var paginas = qsa(".pagina-mat");

  function atualizarCodice() {
    if (!codice || reduzido) return;
    var r = codice.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    var vw = larguraUtil();
    var meio = vw / 2;
    paginas.forEach(function (pg) {
      var b = pg.getBoundingClientRect();
      var d = (b.left + b.width / 2 - meio) / vw;
      var giro = limitar(d * -30, -28, 28);
      pg.style.transform = "rotateY(" + giro.toFixed(2) + "deg) translateZ(" + (-Math.abs(d) * 140).toFixed(1) + "px)";
      pg.style.setProperty("--brillo", Math.max(0, 1 - Math.abs(d) * 3.2).toFixed(3));
    });
  }

  var bonos = qs(".s-bonos");
  function etapaBonos() {
    if (!bonos) return;
    bonos.style.setProperty("--e", bonos.getAttribute("data-etapa") || "0");
  }

  var selo = qs(".sello-anillo");
  function atualizarSelo() {
    if (!selo || reduzido) return;
    var r = selo.getBoundingClientRect();
    if (r.bottom < -100 || r.top > window.innerHeight + 100) return;
    selo.style.setProperty("--giro", (window.scrollY * 0.05).toFixed(2) + "deg");
  }

  // 108 estrelas — uma por capítulo
  function ceu() {
    var secao = qs(".s-cielo");
    var tela = qs(".estrellas");
    if (!secao || !tela || !tela.getContext) return;
    var ctx = tela.getContext("2d");
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    var semente = 108;
    function acaso() {
      semente |= 0; semente = (semente + 0x6D2B79F5) | 0;
      var t = Math.imul(semente ^ (semente >>> 15), 1 | semente);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    var astros = [];
    for (var i = 0; i < 108; i++) {
      var forte = i < 7; // os sete do capítulo 20
      astros.push({
        x: acaso(), y: acaso(), z: 0.25 + acaso() * 0.75,
        r: forte ? 1.5 + acaso() * 0.7 : 0.45 + Math.pow(acaso(), 3) * 1.1,
        a: forte ? 0.85 : 0.22 + acaso() * 0.5,
        fase: acaso() * 6.283, vel: 0.35 + acaso() * 0.7,
        forte: forte
      });
    }
    var visivel = false, rodando = false;

    function dimensionar() {
      tela.width = Math.round(tela.clientWidth * dpr);
      tela.height = Math.round(tela.clientHeight * dpr);
    }

    function desenhar(t) {
      var w = tela.clientWidth, h = tela.clientHeight;
      var rolado = Math.max(0, -secao.getBoundingClientRect().top);
      var ceuAlt = h + secao.offsetHeight * 0.45;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < astros.length; i++) {
        var s = astros[i];
        var y = s.y * ceuAlt - rolado * s.z * 0.45;
        if (y < -12 || y > h + 12) continue;
        var x = s.x * w;
        var alfa = reduzido ? s.a : s.a * (0.72 + 0.28 * Math.sin((t || 0) * 0.001 * s.vel + s.fase));
        ctx.fillStyle = "rgba(242,234,219," + alfa.toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, 6.2832);
        ctx.fill();
        if (s.forte) {
          ctx.strokeStyle = "rgba(242,234,219," + (alfa * 0.35).toFixed(3) + ")";
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(x - s.r * 5, y); ctx.lineTo(x + s.r * 5, y);
          ctx.moveTo(x, y - s.r * 5); ctx.lineTo(x, y + s.r * 5);
          ctx.stroke();
        }
      }
      if (visivel && !reduzido) requestAnimationFrame(desenhar);
      else rodando = false;
    }

    dimensionar();
    window.addEventListener("resize", dimensionar);
    new IntersectionObserver(function (ent) {
      visivel = ent[0].isIntersecting;
      if (visivel && !rodando) { rodando = true; requestAnimationFrame(desenhar); }
    }).observe(secao);
    if (reduzido) window.addEventListener("scroll", function () { requestAnimationFrame(desenhar); }, { passive: true });
  }

  /* ---------- laço principal ---------- */

  var pendente = false;
  function quadro() {
    pendente = false;
    atualizarFio();
    atualizarCodice();
    atualizarPico();
    atualizarSelo();
  }
  function aoRolar() {
    if (!pendente) { pendente = true; requestAnimationFrame(quadro); }
  }

  var agendado = 0;
  function agendar() {
    cancelAnimationFrame(agendado);
    agendado = requestAnimationFrame(function () {
      construirFio();
      medirPico();
      quadro();
    });
  }

  function iniciar() {
    grano();
    tinta();
    tono();
    new MutationObserver(tono).observe(raiz, { attributes: true, attributeFilter: ["style"] });
    if (bonos) {
      new MutationObserver(etapaBonos).observe(bonos, { attributes: true, attributeFilter: ["data-etapa"] });
      etapaBonos();
    }
    rolagemSuave();
    ceu();
    materiais();

    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", agendar);
    if (window.ResizeObserver) new ResizeObserver(agendar).observe(doc.body);
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(agendar);
    window.addEventListener("load", agendar);
    agendar();
  }

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();

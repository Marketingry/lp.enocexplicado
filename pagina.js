/*
 * Enoc Explicado — só o essencial, sem animação de rolagem:
 *   1. preenche as páginas provisórias (folio) a partir do <template>
 *   2. setas do carrossel de páginas
 *   3. troca as imagens provisórias pelos materiais reais listados em materiais/lista.json
 */
(function () {
  "use strict";

  var doc = document;

  function qsa(s, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(s)); }

  /* 1. páginas provisórias */
  var modelo = doc.getElementById("t-folio");
  qsa(".folio[data-cap]").forEach(function (folio) {
    var conteudo = modelo.content.firstElementChild.cloneNode(true);
    conteudo.querySelector(".folio-cap").textContent = folio.dataset.cap;
    conteudo.querySelector(".folio-tit").textContent = folio.dataset.tit;
    while (conteudo.firstChild) folio.appendChild(conteudo.firstChild);
    folio.setAttribute("aria-hidden", "true");
  });

  /* 1b. topo: o título se forma como tinta (só na abertura) e a luz segue o mouse de leve */
  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduzido) {
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

    var lampara = doc.querySelector(".lampara-mouse");
    var folios = doc.querySelector(".folios");
    if (window.matchMedia("(pointer: fine)").matches && lampara && folios) {
      window.addEventListener("pointermove", function (e) {
        var nx = (e.clientX / window.innerWidth) * 2 - 1;
        var ny = (e.clientY / window.innerHeight) * 2 - 1;
        lampara.style.transform = "translate(" + (nx * 36).toFixed(1) + "px," + (ny * 36).toFixed(1) + "px)";
        folios.style.transform = "translate(" + (nx * 12).toFixed(1) + "px," + (ny * 12).toFixed(1) + "px)";
      }, { passive: true });
    }
  }

  /* 2. carrossel: as setas avançam uma página */
  qsa("[data-carrusel]").forEach(function (carrusel) {
    var pista = carrusel.querySelector(".carrusel-pista");
    function passo() {
      var pagina = pista.querySelector(".pagina");
      return pagina ? pagina.getBoundingClientRect().width + 20 : 300;
    }
    carrusel.querySelector(".carrusel-btn--izq").addEventListener("click", function () {
      pista.scrollBy({ left: -passo(), behavior: "smooth" });
    });
    carrusel.querySelector(".carrusel-btn--der").addEventListener("click", function () {
      pista.scrollBy({ left: passo(), behavior: "smooth" });
    });
  });

  /* 3. materiais reais */
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
        img.loading = "lazy";
        img.onload = function () {
          slot.appendChild(img);
          slot.classList.add("con-material");
        };
        img.src = "materiais/" + nome;
      });
    })
    .catch(function () {});
})();

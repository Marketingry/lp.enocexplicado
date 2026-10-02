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

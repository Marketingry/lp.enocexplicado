# Prompts das páginas internas (com o texto dos capítulos)

**Cada página sai pronta, COM o texto do capítulo escrito.**

Para gerar as páginas do carrossel "MIRA UNO DE LOS MATERIALES" e as duas
páginas do topo, **enquanto o print do produto real não fica pronto**.

Layout inspirado nas páginas do vídeo de referência: cabeçalho de papel antigo
rasgado, número do capítulo enorme, etiquetas em cada seção, ilustração pintada
com luz divina. Cores adaptadas ao site: pergaminho, marrom-tinta e dourado.

| Gerar | Salvar como | Também salvar como |
|---|---|---|
| Página 1 · Capítulo 1 | `pagina-01.webp` | — |
| Página 2 · Capítulo 6 | `pagina-02.webp` | `hero-izquierda.webp` (página à esquerda no topo) |
| Página 3 · Capítulo 14 | `pagina-03.webp` | — |
| Página 4 · Capítulo 20 | `pagina-04.webp` | `hero-derecha.webp` (página à direita no topo) |
| Página 5 · Capítulo 72 | `pagina-05.webp` | — |
| Página 6 · Capítulo 91 | `pagina-06.webp` | — |

São **6 imagens** para preencher **8 espaços**.

---

## Como gerar sem dor de cabeça

1. **Use o ChatGPT** (gerador de imagem dele), que é o que melhor escreve texto
   dentro da imagem. O Ideogram é a segunda opção.
2. **Gere todas as 6 na MESMA conversa.** Cole a página 1 primeiro, depois a
   2, a 3, e assim por diante, um prompt por vez e copiando o bloco inteiro.
   As páginas 2 a 6 já começam pedindo "o mesmo layout da página anterior",
   então as 6 saem com cara de um material só.
3. **Formato:** peça **retrato (vertical)**. O site encaixa sozinho no
   formato A4.
4. **Letra grande é obrigatória.** O público tem 35 a 80 anos e a copy promete
   "en letra grande". Se a página vier com letra pequena, responda:
   *"Make all the text much bigger, like a large-print Bible. Make the
   illustration smaller to make room. Keep the same text."*
5. **Confira o texto, palavra por palavra e acento por acento.** Se uma
   palavra sair errada, peça no chat: *"Fix only this word: X → Y. Keep
   everything else identical."* Ou corrija por cima no Canva.
6. Exporte em `.webp` (até ~250 KB), salve em `materiais/` e acrescente os
   nomes em `lista.json`, por exemplo:
   `["pagina-01.webp","pagina-02.webp","pagina-03.webp","pagina-04.webp","pagina-05.webp","pagina-06.webp","hero-izquierda.webp","hero-derecha.webp"]`

> **Importante:** estes textos são um **exemplo fiel ao Livro de Enoc**, para
> as imagens de demonstração. Quando o material real estiver pronto, troque
> pelas páginas de verdade, para a pessoa ver exatamente o que vai receber.

---

## Se abrir uma conversa nova no meio do caminho

As páginas 2 a 6 começam com *"Same layout… as the previous page"*. Isso só
funciona na mesma conversa. Se abrir uma conversa nova, troque essa primeira
frase por este bloco e mantenha o resto do prompt igual:

```
Interior page of a premium Spanish Bible-study ebook called "Enoc Explicado".
IMPORTANT: this is a TEXT page — write ALL the Spanish text below on the page,
clearly and legibly. The illustration is only one element of the page.
LARGE-PRINT EDITION (very important): this material is for readers aged 35
to 80 who need big letters, like a large-print Bible. Body text VERY LARGE
and bold-ish (about 18 pt on an A4 page), only 5 to 7 words per line, generous
line spacing, near-black dark-brown text on light cream for maximum contrast.
Section labels large too. If space is tight, make the illustration SMALLER
(max one third of the page) — NEVER make the text smaller.
Flat, straight-on full page, vertical portrait, NO mockup, NO hands, NO
perspective. Warm cream parchment paper with very subtle texture, generous
margins, clean editorial layout, LARGE-PRINT text for older readers.
Header: torn aged-paper strip across the top, a huge elegant dark-brown serif
chapter number at top-left with the word "Capítulo" in gold handwritten script
overlapping it, and two rounded tan label boxes with big readable text
stacked at top-right.
Section headings are rounded tan tag labels with LARGE dark bold text; body
text LARGE PRINT, dark brown, with key words in bold. One small painted illustration (max one third of the page) in a rounded
rectangle at the top-right. Footer: thin gold line with small text.
All text in Spanish, spelled exactly as given, with correct accents.
Colors: cream parchment, dark brown ink, antique gold (#B8924A), tan labels.
```

---

## Página 1 · Capítulo 1 → `pagina-01.webp`

```
Interior page of a premium Spanish Bible-study ebook called "Enoc Explicado".
IMPORTANT: this is a TEXT page — write ALL the Spanish text below on the page,
clearly and legibly. The illustration is only one element of the page.
LARGE-PRINT EDITION (very important): this material is for readers aged 35
to 80 who need big letters, like a large-print Bible. Body text VERY LARGE
and bold-ish (about 18 pt on an A4 page), only 5 to 7 words per line, generous
line spacing, near-black dark-brown text on light cream for maximum contrast.
Section labels large too. If space is tight, make the illustration SMALLER
(max one third of the page) — NEVER make the text smaller.
Flat, straight-on full page, vertical portrait, NO mockup, NO hands, NO
perspective, NO table. Warm cream parchment paper with very subtle texture,
generous margins, clean and organized editorial layout, LARGE-PRINT
text for older readers.

HEADER: a torn aged-paper strip across the top. At top-left a huge elegant
serif number "1" in dark brown, with the word "Capítulo" in gold handwritten
script overlapping it. At top-right two rounded tan label boxes stacked, with big readable text:
box 1 "TEMA" / "La bendición de Enoc"; box 2 "VERSÍCULOS" / "9".

BODY (section headings are rounded tan tag labels with LARGE dark bold text;
body text LARGE PRINT, dark brown, key words in bold), exactly this text in Spanish:

[Idea central]
"Enoc bendice a los justos y anuncia que Dios vendrá a juzgar al mundo."

[Qué significa]
"Es la introducción del libro. Para los justos habrá paz y luz; para los
impíos, juicio. El versículo 9 es el que cita la carta de Judas."

[Dónde aparece en tu Biblia]
"Judas 1:14-15 · Génesis 5:24 · Deuteronomio 33:2"

ILLUSTRATION (small, at most one third of the page, top-right corner, in a rounded rectangle): Enoch, an elderly
white-bearded prophet in simple ancient robes, standing on a mountain top at
sunrise, raising his hands to bless a crowd of people below, golden divine
light, classical baroque oil painting style, luminous and reverent.

FOOTER: thin gold line; small text "Enoc Explicado" on the left and "1" on
the right.

All text must be in Spanish, spelled exactly as given, with correct accents.
Colors: cream parchment, dark brown ink, antique gold (#B8924A), tan labels.
```

---

## Página 2 · Capítulo 6 → `pagina-02.webp` e `hero-izquierda.webp`

```
Same layout, same style and same colors as the previous page. Only change the
content. IMPORTANT: write ALL the Spanish text below on the page, clearly and
legibly — this is a TEXT page with one illustration, not just an illustration.
Keep the SAME LARGE-PRINT text size as the previous page (big letters for
readers 35+, 5 to 7 words per line); if space is tight, shrink the
illustration, never the text:

HEADER: huge serif number "6" with "Capítulo" in gold script. Label boxes:
"TEMA" / "Los Vigilantes"; "VERSÍCULOS" / "8".

[Idea central]
"Doscientos ángeles, llamados Vigilantes, bajan al monte Hermón y hacen un
juramento."

[Qué significa]
"Enoc cuenta con detalle lo que Génesis 6 resume en pocas líneas: según este
libro, los «hijos de Dios» eran ángeles."

[Personajes y nombres]
"Semyaza — jefe de los Vigilantes"
"Jared — padre de Enoc (Génesis 5:18)"
"Monte Hermón — donde hicieron el juramento"

[Dónde aparece en tu Biblia]
"Génesis 6:1-4 · Judas 1:6 · 2 Pedro 2:4"

ILLUSTRATION (small, at most one third of the page): a group of tall angelic figures with soft wings descending from
luminous clouds onto the snowy summit of Mount Hermon at dusk, seen from afar,
mysterious but NOT frightening, awe-inspiring, classical baroque oil painting.

FOOTER: "Enoc Explicado" left, "6" right.
```

---

## Página 3 · Capítulo 14 → `pagina-03.webp`

```
Same layout, same style and same colors as the previous page. Only change the
content. IMPORTANT: write ALL the Spanish text below on the page, clearly and
legibly — this is a TEXT page with one illustration, not just an illustration.
Keep the SAME LARGE-PRINT text size as the previous page (big letters for
readers 35+, 5 to 7 words per line); if space is tight, shrink the
illustration, never the text:

HEADER: huge serif number "14" with "Capítulo" in gold script. Label boxes:
"TEMA" / "La visión del trono"; "VERSÍCULOS" / "25".

[Idea central]
"Enoc es llevado en visión al cielo y ve el trono de Dios."

[Qué significa]
"Ve una casa de cristal y fuego, un trono brillante como el sol y miles de
miles delante de Dios. Allí recibe la respuesta para los Vigilantes."

[Contexto histórico]
"Los Vigilantes le habían pedido a Enoc que intercediera por ellos. Su
petición no fue aceptada."

[Dónde aparece en tu Biblia]
"Daniel 7:9-10 · Ezequiel 1 · Apocalipsis 4:2-6"

ILLUSTRATION (small, at most one third of the page): Enoch kneeling in awe before a vast heavenly palace of light and
crystal, a radiant throne glowing in the distance, clouds and stars,
reverent, classical baroque oil painting.

FOOTER: "Enoc Explicado" left, "14" right.
```

---

## Página 4 · Capítulo 20 → `pagina-04.webp` e `hero-derecha.webp`

```
Same layout, same style and same colors as the previous page. Only change the
content. IMPORTANT: write ALL the Spanish text below on the page, clearly and
legibly — this is a TEXT page with one illustration, not just an illustration.
Keep the SAME LARGE-PRINT text size as the previous page (big letters for
readers 35+, 5 to 7 words per line); if space is tight, shrink the
illustration, never the text:

HEADER: huge serif number "20" with "Capítulo" in gold script. Label boxes:
"TEMA" / "Los siete arcángeles"; "VERSÍCULOS" / "8".

[Idea central]
"Enoc presenta los nombres de los siete ángeles santos y la misión de cada uno."

[Personajes y nombres] (a clean list, one per line, names in bold)
"Uriel — vela sobre el mundo y el abismo"
"Rafael — sobre los espíritus de los hombres"
"Raguel — hace justicia sobre las luminarias"
"Miguel — sobre el pueblo de Dios"
"Sariel — sobre los espíritus que pecan"
"Gabriel — sobre el paraíso y los querubines"
"Remiel — sobre los que resucitan"

[Dónde aparece en tu Biblia]
"Daniel 12:1 · Lucas 1:19 · Judas 1:9"

ILLUSTRATION (small, at most one third of the page): seven archangels with great golden wings standing in a row in
heavenly light, each holding a different symbol (a sword, a scroll, a lamp, a
staff), peaceful and majestic, classical baroque oil painting.

FOOTER: "Enoc Explicado" left, "20" right.
```

---

## Página 5 · Capítulo 72 → `pagina-05.webp`

```
Same layout, same style and same colors as the previous page. Only change the
content. IMPORTANT: write ALL the Spanish text below on the page, clearly and
legibly — this is a TEXT page with one illustration, not just an illustration.
Keep the SAME LARGE-PRINT text size as the previous page (big letters for
readers 35+, 5 to 7 words per line); if space is tight, shrink the
illustration, never the text:

HEADER: huge serif number "72" with "Capítulo" in gold script. Label boxes:
"TEMA" / "Las luces del cielo"; "VERSÍCULOS" / "37".

[Idea central]
"El ángel Uriel le muestra a Enoc el camino del sol por las puertas del cielo."

[Contexto histórico]
"Aquí empieza el «Libro de las luminarias» (capítulos 72 al 82). Partes de él
se encontraron entre los Manuscritos del Mar Muerto."

[Curiosidades]
"Enoc describe un año de 364 días: 52 semanas exactas."

[Dónde aparece en tu Biblia]
"Génesis 1:14-16 · Salmo 19:1-6"

ILLUSTRATION (small, at most one third of the page): Enoch on a hill at night looking up at the sun, the moon and the
stars arranged in luminous paths across a deep navy sky, an angel beside him
pointing at the heavens, classical baroque oil painting.

FOOTER: "Enoc Explicado" left, "72" right.
```

---

## Página 6 · Capítulo 91 → `pagina-06.webp`

Esta página mostra o "Para reflexionar" e o "Espacio para anotaciones", dois
itens prometidos na copy.

```
Same layout, same style and same colors as the previous page. Only change the
content. IMPORTANT: write ALL the Spanish text below on the page, clearly and
legibly — this is a TEXT page with one illustration, not just an illustration.
Keep the SAME LARGE-PRINT text size as the previous page (big letters for
readers 35+, 5 to 7 words per line); if space is tight, shrink the
illustration, never the text:

HEADER: huge serif number "91" with "Capítulo" in gold script. Label boxes:
"TEMA" / "Palabras a sus hijos"; "VERSÍCULOS" / "19".

[Idea central]
"Enoc reúne a su hijo Matusalén y a su familia, y les pide que amen la
rectitud y caminen en ella."

[Para reflexionar]
"Enoc «caminó con Dios» y enseñó a su familia a hacer lo mismo. ¿Qué quiero
dejarles yo a los míos?"

[Dónde aparece en tu Biblia]
"Génesis 5:21-24 · Miqueas 6:8"

[Espacio para anotaciones]
followed by 6 empty horizontal ruled lines for handwriting, light brown.

ILLUSTRATION (small, at most one quarter of the page, top-right): an elderly Enoch seated by an oil lamp,
speaking lovingly to his gathered sons and grandchildren in an ancient stone
house, warm intimate light, classical baroque oil painting.

FOOTER: "Enoc Explicado" left, "91" right.
```

---

## Se uma palavra sair errada

Responda no mesmo chat: *"Fix only this word: X → Y. Keep everything else
identical."* Repita até o texto ficar 100% certo. Se sobrar um erro teimoso,
corrija só aquela palavra por cima no Canva.

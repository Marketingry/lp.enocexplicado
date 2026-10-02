# Prompts para gerar as imagens — Enoc Explicado

**Todas as imagens saem JÁ COM O TEXTO escrito.**

Inspirado na referência do vídeo (página "150 Salmos Explicados"): caixa 3D com
arte pintada, celular e tablet mostrando páginas, folhas em leque com números
grandes, selos de "mais vendido", capas dos bônus em livrinhos 3D e páginas
internas com cabeçalho de papel antigo e ilustrações cinematográficas.

Adaptado ao site: azul-noite `#121b37`, dourado antigo e pergaminho.

| Imagem | Onde está o prompt | Arquivo |
|---|---|---|
| Capa do produto | este arquivo, item 1 | `hero-portada.webp` |
| Mockup principal | este arquivo, item 2 | `item-01.webp` |
| Mockup Plano Completo | este arquivo, item 3 | `plan-completo.webp` |
| Mockup Plano Básico | este arquivo, item 4 | `plan-basico.webp` |
| 6 capas dos bônus | este arquivo, item 5 | `bono-01.webp` … `bono-06.webp` |
| "Enoc común" × "Con Enoc Explicado" | este arquivo, item 6 | `antes-despues.webp` |
| **6 páginas internas com o texto dos capítulos** | **PROMPTS-PAGINAS.md** | `pagina-01.webp` … `pagina-06.webp`, `hero-izquierda.webp`, `hero-derecha.webp` |

---

## Como usar

1. **Use o ChatGPT** (gerador de imagem dele), que é o que melhor escreve texto
   dentro da imagem. O Ideogram é a segunda opção.
2. Os prompts estão em inglês porque a IA entende melhor assim, mas **o texto
   que aparece na imagem está em espanhol, entre aspas**, e deve sair
   exatamente igual.
3. **Comece pela capa (item 1).** Nos mockups e nos bônus, **anexe a capa
   gerada** junto com o prompt, para o produto sair igual em todas as imagens.
4. **Confira cada palavra e cada acento** ("CAPÍTULOS", "DÍAS", "ÁNGELES").
   Se uma palavra sair errada, responda no mesmo chat:
   *"Fix only this word: X → Y. Keep everything else identical."*
5. **Fundo transparente:** gere com fundo liso e remova no Canva ("Remover
   fundo") ou no remove.bg.
6. **Letra grande em tudo.** O público tem 35 a 80 anos e busca letra maior
   (a copy promete "en letra grande"). Todo texto dentro das imagens deve ser
   grande e com muito contraste. Se vier pequeno, peça: *"Make the text much
   bigger and bolder, easy to read for older people."*
7. **Público mais velho e medo de "ser pecado":** nada sombrio, demoníaco ou
   assustador, nem nos Vigilantes. Tom reverente, luminoso e acolhedor.
8. Exporte em **.webp** (até ~250 KB), salve em `materiais/` com o nome da
   tabela e acrescente o nome em `lista.json` (veja `LEIA-ME.md`).

---

## 1. Capa do produto → `hero-portada.webp`

Formato: **vertical**, capa reta, de frente (o site inclina e põe sombra sozinho).

```
Premium front cover of a Spanish Bible-study ebook, flat and straight-on,
vertical portrait, NO 3D, NO perspective, NO mockup.

ARTWORK filling the cover: the biblical patriarch Enoch, an elderly man with a
long white beard and simple ancient Hebrew robes, walking on a rocky mountain
path at dusk, holding an ancient scroll, looking up toward a radiant opening in
the clouds; warm golden divine light pours down on him; faint gentle winged
angelic figures in the luminous clouds; deep midnight navy sky (#121b37).
Classical baroque oil painting, inspired by Gustave Doré and Rembrandt,
hopeful light, reverent and majestic, not scary.

FRAME: thin double antique-gold border around the whole cover.

TEXT written on the cover, large, clear and perfectly spelled, in this order:
- top, elegant ivory italic: "El Libro de"
- big bold classical serif capitals in antique gold: "ENOC"
- right below, elegant gold italic: "Explicado"
- bottom band, small spaced ivory capitals: "LOS 108 CAPÍTULOS · CAPÍTULO POR CAPÍTULO"
The title must be HUGE and readable even when the cover is shown small
(thumbnail size): "ENOC" fills most of the cover width; strong contrast
between text and background. Crisp, luxurious typography.
```

---

## 2. Mockup principal (igual ao topo da referência) → `item-01.webp`

Formato: **quadrado**. **Anexe a capa do item 1.**

```
Photorealistic 3D product mockup of a digital ebook bundle, plain dark navy
studio background, soft studio lighting, realistic soft shadows, clean edges
for easy cutout. Use the attached cover exactly as the product cover.
Composition:
- center: a tall 3D software-style product box standing at a slight angle,
  front showing the attached cover, side spine with the text "ENOC EXPLICADO"
  in gold vertical letters;
- front-left: a modern smartphone leaning on the box, its screen showing an
  interior page with the big title "Capítulo 1" and lines of text;
- front-right: a tablet showing an interior page with a big number "6" and the
  title "Los Vigilantes";
- behind the box: 4 loose aged-parchment pages fanned out, each with a huge
  elegant serif chapter number in the top-left corner: "1", "14", "20", "72",
  with lines of text and a small painted illustration.
Text on the screens and pages must look LARGE PRINT (big letters, few words
per line), since the buyers are 35 to 80 years old. Warm golden rim light,
premium, high detail, all text perfectly spelled.
```

---

## 3. Mockup do Plano Completo → `plan-completo.webp`

Formato: **quadrado**. **Anexe a capa do item 1.**

```
Same photorealistic ebook bundle mockup: the 3D product box with the attached
cover and the spine text "ENOC EXPLICADO", a smartphone and a tablet showing
interior pages, fanned parchment pages with big chapter numbers.
PLUS, along the bottom, a neat row of 6 small book covers standing side by
side (the bonus volumes), each with a painted religious illustration and its
title written in gold: "Plan de lectura", "¿Qué es el Libro de Enoc?",
"Glosario", "Los 7 arcángeles", "Padre Nuestro en arameo", "Cuaderno".
Badges, perfectly spelled:
- top-left, a gold ribbon banner with bold dark text "MÁS VENDIDO"
- below it, a red rounded pill with white bold text "ACCESO INMEDIATO"
- on the box's corner, a round gold medal seal with the text "CALIDAD PREMIUM"
Plain dark navy background, soft shadows, clean edges for cutout, premium.
```

---

## 4. Mockup do Plano Básico → `plan-basico.webp`

Formato: **quadrado**. **Anexe a capa do item 1.** É o "menor": sem bônus e
sem selos, para o Completo parecer claramente maior.

```
Simple photorealistic mockup: the 3D product box with the attached cover and
the spine text "ENOC EXPLICADO", a smartphone leaning on it showing an interior
page titled "Capítulo 1", and two parchment pages behind it with big chapter
numbers "6" and "20". NO bonus books, NO badges, NO seals. Plain dark navy
background, soft studio light, clean edges for cutout, all text perfectly
spelled.
```

---

## 5. Capas dos 6 bônus → `bono-01.webp` … `bono-06.webp`

Formato: **vertical (3:4)**, igual para os 6, para ficarem padronizados.

**Prompt base** (troque `[TÍTULO]`, `[SUBTÍTULO]` e `[CENA]` pela linha da
tabela):

```
Photorealistic 3D mockup of a single slim hardcover book standing at a slight
angle on a plain light background, soft shadow, clean edges for cutout.
The cover: deep midnight navy (#121b37) with a thin antique-gold frame.
Upper two-thirds: a painted illustration of [CENA], classical baroque oil
painting, luminous and reverent.
Lower third, TEXT written clearly and perfectly spelled:
- title VERY LARGE in bold classical serif, ivory, filling the width,
  readable even at small size: "[TÍTULO]"
- subtitle in gold italic: "[SUBTÍTULO]"
- a small red badge in the top corner of the cover with white bold text "BONO"
Premium, elegant, same style as the attached main cover.
```

| Arquivo | [TÍTULO] | [SUBTÍTULO] | [CENA] |
|---|---|---|---|
| bono-01.webp | Plan de lectura de 30 días | Paso a paso | an open Bible and an ancient scroll on a wooden desk by candlelight, a red ribbon bookmark, a parchment calendar with 30 small squares |
| bono-02.webp | ¿Qué es y qué no es el Libro de Enoc? | Léelo con tranquilidad | ancient clay jars and scroll fragments inside a desert cave near the Dead Sea, a soft shaft of golden light falling on them |
| bono-03.webp | Glosario de nombres y lugares | Quién es quién | an antique illuminated map of the ancient Near East with mountains, a compass rose and gold-leaf details, an old magnifying glass on it |
| bono-04.webp | Los 7 arcángeles de Enoc | Capítulo 20 explicado | seven majestic, gentle archangels with large white-gold wings standing in a semicircle in radiant heavenly light, peaceful faces |
| bono-05.webp | El Padre Nuestro en arameo | Explicado línea por línea | Jesus teaching his disciples on a green hillside at sunrise, warm golden light |
| bono-06.webp | Cuaderno de anotaciones | Para imprimir | an open leather notebook with handwritten notes, a fountain pen and an open Bible beside it, warm lamp light at night |

---

## 6. "Enoc común" × "Con Enoc Explicado" → `antes-despues.webp` (opcional)

Hoje o site já mostra essa comparação em texto real. Só gere a imagem se
quiser algo mais visual. Formato: **horizontal (16:9)**.

```
Split-screen image, 16:9, divided by a thin gold vertical line.

LEFT HALF, label at the top in a dark rounded box with white bold text:
"ENOC COMÚN". Below it, a plain old printed page of an ancient book, dense
tiny text in two columns, no images, no highlights, grey and tiring to read,
slightly dim light.

RIGHT HALF, label at the top in a gold rounded box with dark bold text:
"CON ENOC EXPLICADO". Below it, a clean, beautiful illustrated study page on
warm parchment: a huge serif number "6" with "Capítulo" in gold script, the
title "Los Vigilantes", small tan section labels "Idea central",
"Qué significa" and "Dónde aparece en tu Biblia", a painted illustration of
angels over a mountain at dusk, bright and organized.

Labels "ENOC COMÚN" and "CON ENOC EXPLICADO" big and bold. On the right page
the text is clearly LARGE PRINT (big letters, few words per line), while the
left page has tiny cramped letters — the contrast in letter size is part of
the message. All labels and titles perfectly spelled in Spanish with correct
accents.
```

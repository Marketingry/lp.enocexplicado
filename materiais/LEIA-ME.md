# Materiais reais — como trocar as imagens provisórias

A página já tem espaços desenhados para cada imagem. Enquanto o arquivo real
não existe, aparece uma versão provisória feita em código (páginas e capas
"desenhadas"). Para entrar a imagem de verdade:

1. Salve o arquivo nesta pasta com **exatamente** um dos nomes abaixo
   (de preferência .webp; para outra extensão, troque também no index.html).
2. Acrescente o nome em `lista.json`, por exemplo:
   `["hero-portada.webp", "pagina-01.webp"]`
3. Recarregue a página. A imagem entra sozinha no lugar da provisória.

| Arquivo | Onde aparece | Formato ideal |
|---|---|---|
| hero-portada.webp | Topo: a capa no centro | retrato A4 (1:1,414), fundo transparente ou recortado |
| hero-izquierda.webp | Topo: página à esquerda | retrato A4 |
| hero-derecha.webp | Topo: página à direita | retrato A4 |
| pagina-01.webp … pagina-06.webp | "Mira uno de los materiales": as 6 páginas que deslizam | retrato A4, uma página por arquivo |
| item-01.webp | "Lo que recibes": imagem do Item 01 | livre, fundo transparente |
| bono-01.webp … bono-06.webp | "¡Hay más!": as capas dos 6 bônus que se empilham | retrato A4 |
| plan-basico.webp | Card do Plano Básico | retrato, fundo transparente |
| plan-completo.webp | Card do Plano Completo | livre, fundo transparente |

Dica: exporte as páginas internas a ~1200px de altura e converta para .webp
(qualidade 80). Cada arquivo deve ficar abaixo de ~250 KB, porque o tráfego
vem do celular.

O pico ("Antes → Con Enoc Explicado") NÃO usa imagem: é texto real no HTML.
Para usar o capítulo real do material, troque o texto dentro de
`<div class="antiguo-texto">` e do `<article class="explicado">` no index.html.

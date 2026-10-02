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
| hero.webp | Topo (o mockup principal do produto) | livre, fundo transparente |
| pagina-01.webp … pagina-06.webp | "Mira uno de los materiales": o carrossel de páginas | retrato A4, uma página por arquivo |
| antes-despues.webp | A imagem "ANTES / CON ENOC EXPLICADO" | livre |
| item-01.webp | "Lo que recibes": imagem do Item 01 | livre, fundo transparente |
| bono-01.webp … bono-06.webp | As capas dos 6 bônus | retrato A4 |
| plan-basico.webp | Card do Plano Básico | retrato, fundo transparente |
| plan-completo.webp | Card do Plano Completo | livre, fundo transparente |

Dica: exporte as páginas internas a ~1200px de altura e converta para .webp
(qualidade 80). Cada arquivo deve ficar abaixo de ~250 KB, porque o tráfego
vem do celular.

Se não houver `antes-despues.webp`, a página mostra uma versão provisória em
HTML (Enoc 6 + explicação de exemplo). Troque pelo conteúdo real do material.

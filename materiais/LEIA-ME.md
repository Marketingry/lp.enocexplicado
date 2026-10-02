# Materiais reais — como trocar as imagens provisórias

> Prompts para gerar cada imagem com IA: veja **PROMPTS.md** nesta pasta.

A página já tem espaços desenhados para cada imagem. Enquanto o arquivo real
não existe, aparece uma versão provisória feita em código (páginas e capas
"desenhadas"). Para entrar a imagem de verdade:

1. Salve o arquivo nesta pasta com **exatamente** um dos nomes abaixo.
2. Acrescente o nome em `lista.json`, por exemplo:
   `["hero-portada.webp", "pagina-01.webp"]`
3. Recarregue a página. A imagem entra sozinha no lugar da provisória.

| Arquivo | Onde aparece | Formato |
|---|---|---|
| hero-portada.webp | Topo: a capa no centro | WebP (opaca) |
| pagina-01.webp … pagina-06.webp | Carrossel "Mira uno de los materiales" (as páginas 02 e 04 também aparecem no topo) | WebP (opaca) |
| item-01.png | "Lo que recibes": Item 01 | PNG transparente |
| bono-01.png … bono-06.png | As capas dos 6 bônus | PNG transparente |
| plan-basico.png | Card do Plano Básico | PNG transparente |
| plan-completo.png | Card do Plano Completo (pacote + os 6 bônus) | PNG transparente |
| sello-garantia.png | Selo da garantia de 7 dias | PNG transparente |
| antes-despues.webp | (opcional) imagem "Enoc común / Con Enoc Explicado" | WebP |

As imagens com fundo transparente ficam em PNG (comprimido em 256 cores);
as opacas em WebP. As originais em alta estão em `imagens capitulos/` e
`outras imagens/` e não são usadas pelo site.

Dica: exporte as páginas internas a ~1200px de altura e converta para .webp
(qualidade 80). Cada arquivo deve ficar abaixo de ~250 KB, porque o tráfego
vem do celular.

Se não houver `antes-despues.webp`, a página mostra uma versão provisória em
HTML (Enoc 6 + explicação de exemplo). Troque pelo conteúdo real do material.

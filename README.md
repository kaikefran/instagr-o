# Instagrão

Clone do feed do Instagram feito com React (Vite) e `react-icons`.
Tema: o feed é feito por personagens de **Persona 5**, e cada um posta aquilo que mais quer ver.

- Ann Takamaki: o crepe perfeito
- Ryuji Sakamoto: o time batendo o recorde
- Futaba Sakura: o setup novo sem bugs
- Yusuke Kitagawa: a tela exposta na galeria

As ilustrações são desenhos próprios em SVG.

## Como executar

```
npm install
npm run dev
```

## Desafios feitos

1. **Nova identidade visual:** nome, logo, cores (preto e vermelho) e textos novos, em `src/index.css`.
2. **Posts no JSON:** os posts ficam em `src/data/posts.json`; para adicionar ou editar é só mexer no arquivo.
3. **Curtir:** o botão troca o ícone (coração vazio e cheio) e soma ou tira 1 das curtidas.
4. **Comentários:** campo para publicar comentários em cada post.
5. **Stories:** lista de stories no topo do feed.

## Estrutura

```
src/
  App.jsx               junta Header, Stories e Posts
  components/
    Header.jsx
    Stories.jsx
    Post.jsx            curtir, salvar e comentar (useState)
  data/posts.json       dados das publicações
public/images/          avatares e fotos (SVG)
```

# README.md

Rafael Samico
rsd2@cin.ufpe.br

Este repositório é produto de uma prática de React da disciplina CIN0136 - Desenvolvimento de Software.
A seguir, uma reflexão sobre o meu aprendizado.

# Reflexão

---

## Explicação da escolha da abordagem de construção

- Vite
    - De 2020, por Evan You
    - Builder preferida pela comunidade para SPAs
    - É requisitada na stack do projeto da disciplina
    - CRA (Create React App), do Facebook, foi abandonada em 2023

- React Router
    - De 2014, por Michael Jackson e Ryan Florence
    - Router dos mesmos criadores do Remix
    - Adquirido pela Shopify (2022)

- CSS Modules
    - De 2015, por Glen Maddern e Mark Dalgleish
    - Suporte embutido no Vite: bundlers são Rollup e esbuild
    - CSS-in-JS ou Tailwind aumentam as dependências

---

## Principais dificuldades

- Tive dúvidas nos seguintes tópicos:
    - Setup do repositório
    - Componentização no React
    - Roteamento no React

Tirei as dúvidas com o Claude, da Anthropic.

---

## Principais aprendizados

### Funcionamento do React

- Caminho é: `index.html` > `main.jsx` > `App.jsx`
    - Porta de entrada em HTML (linguagem nativa do navegador)
    - Dentro de `index.html`: <div id="root">
    - Dentro de <div id="root">: </script> apontando para `main.jsx`
    - `main.jsx`tem uma única responsabilidade: inncializar o React e injetar `App.jsx`em <div id="root>
    - `main.jsx`: `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`
    - A partir daí o React assume o controle da página
    - A explicação disso é: _Separation of Concerns_
- Conteúdo da pasta `src/`
    - Além de `assets/` (criada pelo Vite), criar `components`, `pages`e `data`

### Componentização no React

- Componentes (e páginas) são funções JS que retornam HTML
- Formato `.jsx`: Javascript XML ("sintaxe estendida")
- No React, dados e interface são separados (_SoC_)
- `props`: objeto JS, conjunto de pares chave-valor
- Página: empacota `props` e passa para filha (componente)
- Componente: recebe `props` da mãe (página) e desempacota
- Desestruturação: ato de desempacotar o `props` no componente
    - No escopo: `const project = props.project`
    - No parâmetro: `{ project }`

### Estilização no React

- Estilos globais ficam no `index.css` (`~/src/`)
    - Importação de fontes (Google Fonts)
    - CSS reset: `box-sizing`, `margin`, `padding`
    - CSS set: `background`, `font-family`, `color`
    - Design tokens: tipografia, cor, espaçamento etc.
- CSS Modules: `<arquivo>.module.css`
- Para cada `.jsx`, um `module.css` (componentes e páginas)
- Alternativa: CSS-in-JS (e.g. Tailwind)

### Roteamento no React

- O React foi feito para criar SPAs (Single Page Applications)
    - e.g. Facebook, Instagram etc.
    - Só há um arquivo HTML: `index.html` (`~/src/`)
    - Não suporta URLs diferentes (e.g. `/home`, `/portfolio`)
- React Router
    - Biblioteca de roteamento do React
    - Simula navegaçao entre páginas
    - `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'`
        - `BrowserRouter` envolve tudo (`main.jsx` ou `App.jsx`)
        - `Routes` decide qual `Route` renderizar (só um de cada vez)
        - `Link`é o elemento <a> adaptado ao React
    - Boa prática de roteamento (_SoC_)
        - `BrowserRouter` em `main.jsx`
        - `Routes` e `Route` em `App.jsx`
- Apache
    - Usado no webserver do CIn-UFPE
    - Arquivo `.htaccess` (`~/public/`)
    - Redireciona qualquer URL para `index.html`
---

## Caso tenha usado ferramentas de IA, como usou e como lhe ajudou

Usei o Claude, da Anthropic, para tirar dúvidas e revisar código.

### Como?

- Criei um projeto e alimentei ele com um arquivo `react-practice.md`
    - `react-practice.md` contém a descrição da atividade (Classroom)
    - `react-practice/` para a atividade, `react-portfolio` para o repositório

- Pedi ajuda nos seguintes tópicos:
    - Setup do repositório
    - Componentização no React
    - Estilização no React
    - Adaptação do Manual de Marca do CIn
    - Diferença entre SPA e MPA
    - Roteamento no React
### Objetivo

Desenvolver uma aplicação front-end utilizando **React** para exibir um **catálogo de produtos**. O objetivo é aplicar os conceitos aprendidos no módulo, como **criação de componentes reutilizáveis**, uso de **JSX**, **props**, **state**, **controle de formulários** e **ciclo de vida** com o hook `useEffect`.

### Requisitos

#### 1. Estrutura do Projeto
- Criar a aplicação utilizando **Vite**.
- Organizar os arquivos em pastas separadas:
  - `components/`
  - `pages/`
  - `assets/` (se necessário)
  - `App.jsx`

#### 2. Componentes Reutilizáveis
- Criar um componente **`ProdutoCard`** para exibir as informações de um produto.
- O componente deve receber as informações do produto via **props**:
  - `nome`
  - `preço`
  - `imagem`
  - `descrição`

#### 3. Listagem Dinâmica
- Utilizar **state** para armazenar a lista de produtos.
- Renderizar dinamicamente os produtos na tela utilizando `.map()`.

#### 4. Formulário de Cadastro de Produto
- Criar um formulário **controlado** com React para adicionar novos produtos ao catálogo.
- Os dados do formulário devem ser armazenados no **state** e exibidos na tela após o envio.
- Campos obrigatórios:
  - nome do produto
  - preço
  - descrição

#### 5. Simulação de API com `useEffect`
- Simular o carregamento inicial dos produtos usando o hook `useEffect`, com uma lista fictícia ou dados **mockados**.
- Exibir uma mensagem **"carregando..."** enquanto os dados são simuladamente buscados.

### Como rodar o projeto (React + Vite)

#### Pré-requisitos
- Ter o **Node.js** instalado (recomendado: versão LTS).
- Ter um gerenciador de pacotes: **npm**, **yarn** ou **pnpm**.

#### Passo a passo

1. **Clone o repositório** (ou baixe o projeto):
   - Exemplo:
     - `git clone <URL_DO_REPOSITORIO>`

2. **Acesse a pasta do projeto**:
   - `cd <NOME_DA_PASTA_DO_PROJETO>`

3. **Instale as dependências**:
   - Com npm:
     - `npm install`
   - ou com yarn:
     - `yarn`
   - ou com pnpm:
     - `pnpm install`

4. **Rode o servidor de desenvolvimento**:
   - Com npm:
     - `npm run dev`
   - ou com yarn:
     - `yarn dev`
   - ou com pnpm:
     - `pnpm dev`

5. **Abra no navegador**
   - O terminal vai mostrar uma URL parecida com:
     - `http://localhost:5173/`
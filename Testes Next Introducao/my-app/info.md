# Desafio Prático: Aplicação de Lista de Tarefas com Next.js 15 e Testing Library

## 🎯 Descrição do Desafio

Você deverá criar uma aplicação simples de listagem e adição de tarefas com as seguintes funcionalidades:

- **Exibir uma lista de tarefas** vinda de um arquivo simulado (como se fosse uma API).
- **Adicionar novas tarefas** via formulário controlado.
- **Contar a quantidade de tarefas** utilizando um hook personalizado (`useContadorDeTarefas`).
- **Escrever testes unitários** para os principais elementos da aplicação.

---

## 🛠️ Requisitos Técnicos

### 1. Estrutura da Aplicação

- **Framework & Linguagem:** Criar um projeto utilizando **Next.js 15** (App Router) com **TypeScript**.
- **Server Component (`app/page.tsx`):** Componente servidor responsável por carregar a lista inicial de tarefas.
- **Client Component (`<NovaTarefa />`):** Componente interativo para captura de entrada do usuário e adição de novas tarefas.
- **Custom Hook (`useContadorDeTarefas`):** Hook responsável por retornar o número atual de tarefas ativas na lista.
- **Gerenciamento de Dados:** Os dados podem ser armazenados temporariamente em um array local ou simular chamadas assíncronas utilizando `Promise.resolve()`.

### 2. Testes Unitários

- **Componente `<NovaTarefa />`:**
  - Validação de entrada no formulário (inputs vazios ou inválidos).
  - Comportamento e habilitação do botão de envio.
  - Disparo correto do evento de submissão do formulário.
- **Custom Hook (`useContadorDeTarefas`):**
  - Testar a lógica do hook de forma isolada utilizando `renderHook` da `@testing-library/react`.
- **Renderização da Página e Fluxo:**
  - Verificar a renderização das tarefas sem necessidade de mock de API externa.
  - Garantir a validação dos valores retornados pelo hook.
  - Confirmar a exibição e renderização correta de todos os elementos em tela.

### 3. Organização e Arquitetura do Projeto

- **Estrutura de Pastas Recomendada:**
  - `src/app/` ou `app/` (rotas do Next.js)
  - `src/components/` (componentes da interface, ex: `<NovaTarefa />`)
  - `src/hooks/` (hooks customizados, ex: `useContadorDeTarefas`)
  - `tests/` ou `__tests__/` (suíte de testes unitários)
- **Ferramentas de Teste:** **Jest** e **React Testing Library** (`@testing-library/react`, `@testing-library/jest-dom`).
- **Cobertura:** Garantir cobertura mínima dos fluxos principais de interação do usuário e de lógica de negócios.

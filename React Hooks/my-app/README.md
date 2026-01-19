# 📝 Todo List Avançado com React

## 📋 Descrição do Projeto

Aplicação de lista de tarefas (Todo List) desenvolvida com recursos avançados do React, focando em boas práticas de desenvolvimento, organização de código, reuso de lógica e otimização de performance através de Hooks, Hooks customizados, Memoization e Context API.

---

## 🎯 Funcionalidades

O usuário pode:

- ✅ Adicionar uma nova tarefa
- ✔️ Marcar uma tarefa como concluída
- 🗑️ Remover tarefas da lista
- 🔍 Filtrar tarefas (todas, concluídas, pendentes)
- 💾 Persistir dados no localStorage

---

## 🚀 Tecnologias Utilizadas

- **React** (v18+)
- **JavaScript (ES6+)**
- **Context API** - Gerenciamento de estado global
- **Hooks** - useState, useEffect, useContext, useMemo
- **Custom Hooks** - Lógica reutilizável encapsulada
- **React.memo** - Otimização de renderização
- **LocalStorage API** - Persistência de dados
- **CSS3** - Estilização

---

## 🛠️ Recursos Avançados Implementados

### 1. **Hooks**
- `useState` para gerenciar o estado da lista de tarefas
- `useEffect` para persistir dados no localStorage

### 2. **Context API**
- Contexto global para gerenciar o estado da lista
- `useContext` para acessar e atualizar o estado em diferentes componentes

### 3. **Hooks Customizados**
- Hook customizado para manipulação de localStorage
- Hook customizado para controle de inputs
- Encapsulamento de lógica reutilizável

### 4. **Memoization**
- `useMemo` para otimizar cálculos de filtros
- `React.memo` para evitar renderizações desnecessárias em componentes de lista

---

## 📦 Instruções para Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
    ```bash
    git clone https://github.com/seu-usuario/todo-list-avancado.git

2. **Acesse a pasta do projeto**
    ```bash
    cd todo-list-avancado

3. **Instale as dependências**
    ```bash
    npm install
    ou
    yarn install

4. **Inicie o servidor de desenvolvimento**
    ```bash
    npm start
    ou
    yarn start

5. **Acesse no navegador**
    ```bash
    http://localhost:5173/
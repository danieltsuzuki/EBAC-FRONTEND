# TaskFlow • Gerenciador de Tarefas com Recoil

Aplicação moderna e reativa para gerenciamento de tarefas desenvolvida em **React** utilizando **Recoil** para gerenciamento de estado global previsível e atômico.

---

## 🎯 Objetivo do Desafio

Praticar e aplicar os conceitos fundamentais do **Recoil**:
1. **RecoilRoot**: Configurado no nível raiz da aplicação como provedor de contexto.
2. **Átomos (Atoms)**: Unidades fundamentais de estado compartilhadas entre componentes.
3. **Seletores (Selectors)**: Funções puras que derivam estado de forma reativa e síncrona.
4. **Hooks do Recoil**: `useRecoilState`, `useRecoilValue` e `useSetRecoilState` para leitura e mutação desacoplada.

---

## 📂 Estrutura de Pastas e Arquivos

```text
recoil/
├── public/
├── src/
│   ├── atoms/
│   │   ├── todoListAtom.js         # Átomo da lista de tarefas (todoListState)
│   │   └── todoListFilterAtom.js   # Átomo do filtro ativo (todoListFilterState)
│   ├── selectors/
│   │   ├── filteredTodoListSelector.js # Seletor que filtra as tarefas
│   │   └── todoListStatsSelector.js    # Seletor de estatísticas e progresso
│   ├── components/
│   │   ├── Header.jsx              # Cabeçalho da aplicação
│   │   ├── TodoItemCreator.jsx     # Formulário de criação de tarefas
│   │   ├── TodoListFilters.jsx     # Barra de filtros (Todas, Pendentes, Concluídas)
│   │   ├── TodoListStats.jsx       # Cards de métricas e barra de progresso
│   │   ├── TodoItem.jsx            # Item individual (concluir, editar, excluir)
│   │   └── TodoList.jsx            # Lista filtrada e empty states
│   ├── App.jsx                     # Componente principal integrador
│   ├── main.jsx                    # Ponto de entrada com RecoilRoot
│   └── index.css                   # Sistema de design moderno e responsivo
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚛️ Arquitetura Recoil Implementada

### 1. Provedor Global (`RecoilRoot`)
No arquivo `src/main.jsx`:
```jsx
<React.StrictMode>
  <RecoilRoot>
    <App />
  </RecoilRoot>
</React.StrictMode>
```

### 2. Átomos (`src/atoms/`)
- **`todoListState`**: Armazena o array de tarefas (`id`, `text`, `isComplete`, `category`, `createdAt`).
- **`todoListFilterState`**: Armazena o filtro ativo (`Show All`, `Show Completed`, `Show Uncompleted`).

### 3. Seletores (`src/selectors/`)
- **`filteredTodoListState`**: Lê `todoListFilterState` e `todoListState`, retornando a lista filtrada dinamicamente.
- **`todoListStatsState`**: Computa métricas em tempo real (total de tarefas, concluídas, pendentes e percentual de progresso).

### 4. Uso dos Hooks nos Componentes
- **`useRecoilValue`**: Usado em `TodoList.jsx` e `TodoListStats.jsx` para leitura reativa sem re-renderizações desnecessárias.
- **`useRecoilState`**: Usado em `TodoListFilters.jsx` e `TodoItem.jsx` para leitura e atualização bidirecional.
- **`useSetRecoilState`**: Usado em `TodoItemCreator.jsx` para adicionar tarefas sem precisar assinar as alterações da lista.

---

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório ou acesse a pasta do projeto:
```bash
cd recoil
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

---

## 📤 Publicando no GitHub

Para subir este projeto no GitHub:

```bash
git init
git add .
git commit -m "feat: implement to-do list with React and Recoil"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

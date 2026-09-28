# 📝 Gerenciador de Tarefas (ToDo App) - Next.js 15 & Testing Library

Aplicação web para listagem e gerenciamento de tarefas desenvolvida com **Next.js 15 (App Router)**, **React 19**, **TypeScript** e **TailwindCSS**, acompanhada de uma suíte completa de testes unitários e de integração com **Jest** e **React Testing Library (RTL)**.

---

## 🚀 Funcionalidades

- **Server Component Inicial (`app/page.tsx`)**: Carrega a lista inicial de tarefas a partir de uma fonte simulada assíncrona (`data/tasks.ts`) sem dependência de APIs externas.
- **Client Component Interativo (`app/page/todo.tsx`)**: Gerencia o estado reativo da lista de itens e integra formulário e tabela.
- **Formulário Controlado (`app/components/novaTarefa.tsx`)**:
  - Validação de entrada (impede envio com campo vazio ou inválido).
  - Feedback visual de erro imediato.
  - Botão **Salvar** para registrar novas tarefas.
  - Botão **Cancelar** com `type="button"` que limpa o campo de texto e mensagens de erro sem disparar submissão.
- **Tabela de Itens (`app/components/table.tsx`)**: Exibe as tarefas cadastradas e o totalizador formatado, tratando também o estado vazio (*Empty State*).
- **Custom Hook (`app/hooks/useContadorDeTarefas.tsx`)**: Hook desacoplado com `useMemo` responsável por calcular a contagem de tarefas ativas em tempo real.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js**: Versão 18.18+ ou 20+ (Recomendado LTS)
- **npm** (incluso com o Node.js) ou outro gerenciador de pacotes (yarn / pnpm)

---

## 🔧 Instalação e Execução

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse a aplicação no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

4. **Compilação para Produção (Opcional):**
   ```bash
   npm run build
   npm run start
   ```

---

## 🧪 Suíte de Testes

Os testes cobrem 100% dos componentes, hooks, páginas e fluxos integrados da aplicação.

### Comandos de Teste

- **Executar todos os testes com relatório de cobertura:**
  ```bash
  npm test
  # ou
  npm run test:coverage
  ```

- **Executar testes em modo observador (*watch mode*):**
  ```bash
  npm run test:watch
  ```

### Estrutura dos Testes

| Arquivo de Teste | Escopo / Descrição |
| :--- | :--- |
| `tests/page.test.tsx` | Valida a renderização do **Server Component** (`app/page.tsx`) com os dados simulados assíncronos. |
| `tests/integration/todoFlow.test.tsx` | Testa o **fluxo integrado**: formulário + tabela + atualização dinâmica do contador. |
| `tests/components/novaTarefa.test.tsx` | Valida envio correto, mensagem de erro ao submeter vazio e ação do botão **Cancelar** (`type="button"`). |
| `tests/components/table.test.tsx` | Testa exibição da listagem, mensagem de lista vazia e rodapé com total de itens. |
| `tests/components/shared.test.tsx` | Valida renderização dos componentes globais `Header` e `Footer`. |
| `tests/hooks/useContadorDeTarefas.test.tsx` | Testa a lógica do hook isoladamente via `renderHook`, incluindo adições e remoções. |

---

## 📂 Arquitetura do Projeto

```text
├── app/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── footer.tsx      # Rodapé global
│   │   │   └── header.tsx      # Cabeçalho global
│   │   ├── novaTarefa.tsx      # Formulário controlado de adição
│   │   └── table.tsx           # Tabela de listagem e totalizadores
│   ├── hooks/
│   │   └── useContadorDeTarefas.tsx # Hook de contagem com memoização
│   ├── page/
│   │   └── todo.tsx            # Client Component integrador
│   ├── types/
│   │   └── items.type.ts       # Definições TypeScript
│   ├── globals.css             # Estilização global e TailwindCSS
│   ├── layout.tsx              # Root Layout do Next.js
│   └── page.tsx                # Server Component que busca tarefas simuladas
├── data/
│   └── tasks.ts                # Fonte simulada assíncrona de tarefas
├── tests/
│   ├── components/             # Testes unitários de componentes
│   ├── hooks/                  # Testes unitários do hook
│   ├── integration/            # Testes de fluxo integrado
│   └── page.test.tsx           # Teste do Server Component
├── jest.config.ts              # Configuração do Jest com Next.js
├── jest.setup.ts               # Extensões @testing-library/jest-dom
└── package.json
```

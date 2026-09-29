import React from 'react';
import Header from './components/Header';
import TodoItemCreator from './components/TodoItemCreator';
import TodoListStats from './components/TodoListStats';
import TodoListFilters from './components/TodoListFilters';
import TodoList from './components/TodoList';
import { Layers, Database, GitFork } from 'lucide-react';

export default function App() {
  return (
    <div className="app-layout">
      <div className="app-container">
        <Header />

        <main className="app-main">
          {/* Form to add tasks (updates todoListState atom) */}
          <TodoItemCreator />

          {/* Stats dashboard (reads todoListStatsState selector) */}
          <TodoListStats />

          {/* Filter tabs (reads & updates todoListFilterState atom) */}
          <TodoListFilters />

          {/* Filtered list (reads filteredTodoListState selector) */}
          <TodoList />
        </main>

        <footer className="app-footer">
          <div className="architecture-badges">
            <div className="badge-item">
              <Database size={14} />
              <span><strong>Átomos:</strong> todoListState, todoListFilterState</span>
            </div>
            <div className="badge-item">
              <GitFork size={14} />
              <span><strong>Seletores:</strong> filteredTodoListState, todoListStatsState</span>
            </div>
            <div className="badge-item">
              <Layers size={14} />
              <span><strong>Hooks:</strong> useRecoilState, useRecoilValue, useSetRecoilState</span>
            </div>
          </div>
          <p className="footer-credits">
            Desenvolvido com <strong>React</strong> & <strong>Recoil</strong> • Desafio de Gerenciamento de Estado Global
          </p>
        </footer>
      </div>
    </div>
  );
}

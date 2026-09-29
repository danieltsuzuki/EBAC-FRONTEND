import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/filteredTodoListSelector';
import { todoListFilterState, FilterOptions } from '../atoms/todoListFilterAtom';
import TodoItem from './TodoItem';
import { ClipboardList, CheckCircle2, Clock } from 'lucide-react';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const currentFilter = useRecoilValue(todoListFilterState);

  const getEmptyStateMessage = () => {
    switch (currentFilter) {
      case FilterOptions.COMPLETED:
        return {
          icon: <CheckCircle2 size={42} className="empty-icon" />,
          title: 'Nenhuma tarefa concluída ainda',
          subtitle: 'Conclua suas tarefas pendentes para vê-las aqui!',
        };
      case FilterOptions.UNCOMPLETED:
        return {
          icon: <Clock size={42} className="empty-icon" />,
          title: 'Tudo em dia!',
          subtitle: 'Você não tem tarefas pendentes no momento. Bom trabalho!',
        };
      case FilterOptions.ALL:
      default:
        return {
          icon: <ClipboardList size={42} className="empty-icon" />,
          title: 'Sua lista está vazia',
          subtitle: 'Adicione uma nova tarefa no formulário acima para começar.',
        };
    }
  };

  if (todoList.length === 0) {
    const emptyState = getEmptyStateMessage();
    return (
      <div className="empty-state-card">
        {emptyState.icon}
        <h3 className="empty-title">{emptyState.title}</h3>
        <p className="empty-subtitle">{emptyState.subtitle}</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

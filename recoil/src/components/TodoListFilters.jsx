import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListFilterState, FilterOptions } from '../atoms/todoListFilterAtom';
import { todoListStatsState } from '../selectors/todoListStatsSelector';
import { todoListState } from '../atoms/todoListAtom';
import { ListFilter, CheckCircle, Clock, Trash2 } from 'lucide-react';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(todoListStatsState);
  const setTodoList = useSetRecoilState(todoListState);

  const clearCompleted = () => {
    setTodoList((oldList) => oldList.filter((item) => !item.isComplete));
  };

  const filterTabs = [
    {
      key: FilterOptions.ALL,
      label: 'Todas',
      icon: ListFilter,
      count: totalNum,
    },
    {
      key: FilterOptions.UNCOMPLETED,
      label: 'Pendentes',
      icon: Clock,
      count: totalUncompletedNum,
    },
    {
      key: FilterOptions.COMPLETED,
      label: 'Concluídas',
      icon: CheckCircle,
      count: totalCompletedNum,
    },
  ];

  return (
    <div className="filters-container">
      <div className="filter-buttons" role="tablist">
        {filterTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = filter === tab.key;
          return (
            <button
              key={tab.key}
              id={`filter-${tab.label.toLowerCase()}`}
              role="tab"
              aria-selected={isActive}
              className={`filter-btn ${isActive ? 'active' : ''}`}
              onClick={() => setFilter(tab.key)}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
              <span className="filter-badge">{tab.count}</span>
            </button>
          );
        })}
      </div>

      {totalCompletedNum > 0 && (
        <button
          id="clear-completed-btn"
          className="clear-completed-btn"
          onClick={clearCompleted}
          title="Remover tarefas concluídas"
        >
          <Trash2 size={14} />
          <span>Limpar concluídas</span>
        </button>
      )}
    </div>
  );
}

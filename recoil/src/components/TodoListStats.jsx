import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../selectors/todoListStatsSelector';
import { ListTodo, CheckCircle2, CircleDashed, TrendingUp } from 'lucide-react';

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper stat-total">
            <ListTodo size={20} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Total</span>
            <span className="stat-value">{totalNum}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper stat-pending">
            <CircleDashed size={20} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Pendentes</span>
            <span className="stat-value">{totalUncompletedNum}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper stat-completed">
            <CheckCircle2 size={20} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Concluídas</span>
            <span className="stat-value">{totalCompletedNum}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper stat-progress">
            <TrendingUp size={20} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Conclusão</span>
            <span className="stat-value">{percentCompleted}%</span>
          </div>
        </div>
      </div>

      {totalNum > 0 && (
        <div className="progress-bar-container">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${percentCompleted}%` }}
            />
          </div>
          <div className="progress-bar-label">
            <span>Progresso Geral</span>
            <span>{totalCompletedNum} de {totalNum} concluídas</span>
          </div>
        </div>
      )}
    </section>
  );
}

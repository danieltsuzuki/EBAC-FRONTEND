import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';
import { PlusCircle, Tag } from 'lucide-react';

const CATEGORIES = ['Estudos', 'Trabalho', 'Pessoal', 'Recoil'];

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('Estudos');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const now = new Date();
    const formattedTime = `Hoje, ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: `task-${Date.now()}`,
        text: inputValue.trim(),
        isComplete: false,
        category,
        createdAt: formattedTime,
      },
    ]);

    setInputValue('');
  };

  return (
    <form className="creator-card" onSubmit={addItem}>
      <div className="creator-input-group">
        <input
          id="new-task-input"
          type="text"
          className="creator-input"
          placeholder="O que precisa ser feito hoje? (ex: Estudar seletores no Recoil)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        <div className="creator-options">
          <div className="category-select-wrapper">
            <Tag size={15} className="category-icon" />
            <select
              id="category-select"
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button
            id="add-task-btn"
            type="submit"
            className="creator-submit-btn"
            disabled={!inputValue.trim()}
          >
            <PlusCircle size={18} />
            <span>Adicionar Tarefa</span>
          </button>
        </div>
      </div>
    </form>
  );
}

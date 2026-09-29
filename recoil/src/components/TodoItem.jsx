import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';
import { Check, Trash2, Edit3, CheckSquare, Square, Clock } from 'lucide-react';

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const inputRef = useRef(null);

  const index = todoList.findIndex((listItem) => listItem === item);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const editItemText = (newText) => {
    if (!newText.trim()) return;
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: newText.trim(),
    });
    setTodoList(newList);
    setIsEditing(false);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      editItemText(editText);
    } else if (e.key === 'Escape') {
      setEditText(item.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item-card ${item.isComplete ? 'completed' : ''}`}>
      <button
        type="button"
        className={`checkbox-btn ${item.isComplete ? 'checked' : ''}`}
        onClick={toggleItemCompletion}
        aria-label={item.isComplete ? 'Marcar como pendente' : 'Marcar como concluída'}
      >
        {item.isComplete ? <CheckSquare size={20} /> : <Square size={20} />}
      </button>

      <div className="todo-item-content">
        {isEditing ? (
          <div className="edit-form">
            <input
              ref={inputRef}
              type="text"
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => editItemText(editText)}
            />
            <button
              type="button"
              className="save-edit-btn"
              onClick={() => editItemText(editText)}
              title="Salvar alterações"
            >
              <Check size={16} />
            </button>
          </div>
        ) : (
          <div className="todo-text-wrapper" onDoubleClick={() => setIsEditing(true)}>
            <span className="todo-text">{item.text}</span>
            <div className="todo-metadata">
              {item.category && (
                <span className={`category-tag tag-${item.category.toLowerCase()}`}>
                  {item.category}
                </span>
              )}
              {item.createdAt && (
                <span className="time-tag">
                  <Clock size={12} />
                  {item.createdAt}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="todo-actions">
        {!isEditing && (
          <button
            type="button"
            className="action-btn edit-btn"
            onClick={() => setIsEditing(true)}
            title="Editar tarefa"
          >
            <Edit3 size={16} />
          </button>
        )}
        <button
          type="button"
          className="action-btn delete-btn"
          onClick={deleteItem}
          title="Excluir tarefa"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

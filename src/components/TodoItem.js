import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onDelete, onToggleComplete }) {
  function handleDelete() {
    onDelete(todo.id);
  }

  function handleToggleComplete() {
    onToggleComplete(todo.id);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      <span
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;

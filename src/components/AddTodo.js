import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() === '') {
      return;
    }
    onAdd(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;

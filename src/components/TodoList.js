import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  const completedCount = todos.filter(todo => todo.completed).length;
  const remainingCount = todos.length - completedCount;

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="task-count">Tasks: {todos.length}</div>
      <div className="completed-count">Completed: {completedCount}</div>
      <div className="remaining-count">Remaining: {remainingCount}</div>
      <hr />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggleComplete={toggleComplete}
        />
      ))}
      <hr />
      <AddTodo onAdd={addTodo} />
    </div>
  );
}

export default TodoList;

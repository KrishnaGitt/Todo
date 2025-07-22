import React from 'react'
import ToDoItem from './ToDoItem';
import "./app.css"
const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) return <p className="no-tasks-message">No tasks to display.</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;

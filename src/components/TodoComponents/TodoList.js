import React from 'react';
import Todo from './Todo';

function TodoList({ tasks }) {
  return (
    <div className="todo-list">
      {tasks.map(todo => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
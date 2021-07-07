import React from 'react';
import Todo from './Todo';

function TodoList({ tasks, dispatch }) {
  return (
    <div className="todo-list">
      {tasks.map(todo => <Todo 
        key={todo.id} 
        todo={todo} 
        dispatch={dispatch}
      />)}
    </div>
  );
}

export default TodoList;
import React from 'react';

function Todo({ todo, dispatch }) {
  return (
    <div className={todo.completed ? "completed" : null}
    onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })}>
      <p>{todo.item}</p>
    </div>
  );
}

export default Todo;
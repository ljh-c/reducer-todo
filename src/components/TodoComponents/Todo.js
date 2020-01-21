import React from 'react';

function Todo({ todo, dispatch }) {
  return (
    <>
    {todo.completed ? (
      <div className="when-completed">
        Completed {todo.completed_on}
      </div>
    ) : null}
    <div className={todo.completed ? "completed" : null}
    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}>
      <p>{todo.item}</p>
    </div>
    </>
  );
}

export default Todo;
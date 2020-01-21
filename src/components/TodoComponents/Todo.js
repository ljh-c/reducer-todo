import React from 'react';

function Todo({ todo }) {
  return (
    <div>
      <p>{todo.item}</p>
    </div>
  );
}

export default Todo;
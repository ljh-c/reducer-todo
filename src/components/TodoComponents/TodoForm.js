import React, { useState } from 'react';

function TodoForm({ dispatch }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();

    dispatch({ type: 'ADD_TODO', payload: newTask });
    setNewTask('');
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={handleChange}
      />
      <button type="submit"><i class="material-icons">add</i></button>
    </form>
  );
}

export default TodoForm;
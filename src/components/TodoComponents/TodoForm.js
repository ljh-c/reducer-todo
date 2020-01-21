import React, { useState } from 'react';
import { Button } from 'reactstrap';

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
      <Button type="submit" color='primary'><strong>+</strong></Button>
    </form>
  );
}

export default TodoForm;
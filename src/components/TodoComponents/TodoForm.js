import React, { useState } from 'react';
import { Button, InputGroup, Input, InputGroupAddon } from 'reactstrap';

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
      <InputGroup>
        <Input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={handleChange}
        / >
        <InputGroupAddon addonType="append"><Button type="submit" color="primary"><strong>+</strong></Button></InputGroupAddon>
      </InputGroup>
    </form>
  );
}

export default TodoForm;
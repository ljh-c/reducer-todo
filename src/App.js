import React, { useState, useReducer } from 'react'
import './App.css';
import { initialState, taskReducer } from './reducers';
import { Button } from 'reactstrap';

// components
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/SearchForm';
import TodoList from './components/TodoComponents/TodoList';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [query, setQuery] = useState('');

  const handleQuery = event => {
    setQuery(event.target.value)
  };

  const displayedTasks = tasks.filter(todo => todo.item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="App container">
      <header>
        <h1>Just To-Do It</h1>
        <TodoForm dispatch={dispatch} />
      </header>
      <div className="actions">
        <SearchForm query={query} handleQuery={handleQuery} />
        <Button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })} color='secondary'>Clear completed tasks</Button>
        <Button onClick={() => dispatch({ type: 'CLEAR_ALL' })} color='danger'>Clear ALL tasks</Button>
      </div>
      <TodoList tasks={displayedTasks} dispatch={dispatch} />
    </div>
  );
}

export default App;
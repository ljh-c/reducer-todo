import React, { useReducer } from 'react';
import './App.css';
import { initialState, taskReducer } from './reducers';

// components
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  return (
    <div className="App">
      <header>
        <h1>Just To-Do It</h1>
        <TodoForm dispatch={dispatch} />
      </header>
      <TodoList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText ] = useState('');

  const [todos, setTodos ] = useState([]);

  const [filterOption, setFilterOption ] = useState('all');

  const [filteredTodos, setFilteredTodos ] = useState([]);

  React.useEffect(() => {
    getTodosFromLocalStorage();
  }, []);

  React.useEffect(() => {
    filterHandler();
    saveTodosToLocalStorage();
  }, [todos, filterOption]);

  const filterHandler = () => {
    switch (filterOption) {
      case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.isComplete === true));
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.isComplete === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }

  const saveTodosToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getTodosFromLocalStorage = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  }

  return (
    <div className="container">
      <h1>React To Do</h1>
      <AddToDo inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} 
        filterOption={filterOption} setFilterOption={setFilterOption} />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  ); 
}

export default App;

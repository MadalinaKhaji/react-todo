import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, setTodos, filteredTodos }) {
    return filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
    ));
}

export default ToDoList;
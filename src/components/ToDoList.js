import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, setTodos, filteredTodos }) {
    return (
        <div style={ filteredTodos.length > 0 ? todoListStyle : {} }>
            { filteredTodos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /> )) }
        </div>
    );
}

const todoListStyle = {
    padding: '1rem 1rem 0.5rem 1rem',
    border: 'solid thin #cccccc',
    borderRadius: '0.5rem',
}

export default ToDoList;
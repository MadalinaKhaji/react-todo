import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className={ filteredTodos.length > 0 ? 'list-container' : '' }>
            { filteredTodos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} /> )) }
        </div>
    );
}

export default ToDoList;

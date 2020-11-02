import React from 'react';

const ToDoItem = ({todo, todos, setTodos }) => {
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, isComplete: !item.isComplete
                }
            }
            return item;
        }));
    }

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    return (
        <div>
            <input onClick={completeHandler} type="checkbox"></input>
            <span style={ todo.isComplete ? completedStyle : {} }>{todo.text}</span>
            <button onClick={deleteHandler}><span className="material-icons">delete</span></button>
        </div>
    );
}

const completedStyle = {
    textDecoration: 'line-through',
    opacity: '0.5',
};

export default ToDoItem;
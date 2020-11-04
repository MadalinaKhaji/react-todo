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
    };

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    return (
        <div className="todo-item">
            <input onClick={completeHandler} type="checkbox" defaultChecked={todo.isComplete ? 'checked' : '' }></input>
            <span className={todo.isComplete ? 'completed' : '' }>{todo.text}</span>
            <button onClick={deleteHandler}><span className="material-icons delete-icon">delete</span></button>
        </div>
    );
}

export default ToDoItem;

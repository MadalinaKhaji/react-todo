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
        <div style={todoItemStyle}>
            <input onClick={completeHandler} type="checkbox" style={inputStyle} defaultChecked={todo.isComplete ? 'checked' : '' }></input>
            <span style={todo.isComplete ? completedStyle : todoTextStyle }>{todo.text}</span>
            <button onClick={deleteHandler} style={deleteButtonStyle}><span className="material-icons" style={iconStyle}>delete</span></button>
        </div>
    );
}

const todoItemStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '0.5rem',
    padding: '0.5rem',
    border: 'solid thin #cccccc',
    borderRadius: '0.5rem',
};

const inputStyle = {
    fontSize: '1rem',
};

const todoTextStyle = {
    justifySelf: 'start',
    fontSize: '1rem'
};

const completedStyle = {
    fontSize: '1rem',
    textDecoration: 'line-through',
    opacity: '0.5',
};

const iconStyle = {
    fontSize: '1.5em',
    color: '#ff3300',
};

const deleteButtonStyle = {
    backgroundColor: '#fff',
    border: '0',
};

export default ToDoItem;
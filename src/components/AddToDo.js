import React from 'react';
import uniqid from 'uniqid';

const AddToDo  = ({ inputText, setInputText, todos, setTodos, filterOption, setFilterOption }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // validate input

        setTodos([
            ...todos, { id: uniqid(), text: inputText, isComplete: false}
        ]);

        setInputText('');
    };

    const filterHandler = (e) => {
        setFilterOption(e.target.value)
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle}>
                <input value={inputText} onChange={inputTextHandler} type="text" style={inputStyle}/>
                <button onClick={submitHandler} type="submit" style={addButtonStyle}>
                    <span className="material-icons" style={iconStyle}>add</span> Add</button>
            </form>
            <select onClick={filterHandler} id="filterOptions" name="options" style={selectStyle}>
                <option value="all">All</option>
                <option value="completed">Complete</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}

const containerStyle = {
    display: 'inline-block',
    padding: '1rem',
    marginBottom: '1rem',
    border: 'solid thin #cccccc',
    borderRadius: '0.5rem',
};

const formStyle = {
    display: 'inline-block',
    margin: '0 1rem 0 0',
};

const inputStyle = {
    display: 'inline-block',
    marginRight: '0.25rem',
    padding: '0.5rem',
    border: 'solid thin #cccccc',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none'
};

const iconStyle = {
    fontSize: '1.25em',
    verticalAlign: 'bottom',
};

const addButtonStyle = {
    padding: '0.5rem',
    border: 'solid thin #ccebff',
    borderRadius: '0.5rem',
    backgroundColor: '#33adff',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
};

const selectStyle = {
    display: 'inline-block',
    padding: '0.5rem',
    border: 'solid thin #cccccc',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
};

export default AddToDo;
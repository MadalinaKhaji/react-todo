import React from 'react';
import uniqid from 'uniqid';

const AddToDo  = ({ inputText, setInputText, todos, setTodos, filterOption, setFilterOption }) => {

    const inputTextHandler = (e) => {
        console.log(e);

        setInputText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

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
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" />
                <button onClick={submitHandler} type="submit">Add</button>
            </form>
            <select onClick={filterHandler} id="filterOptions" name="options">
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
    border: 'solid thin #000',
    borderRadius: '0.5rem',
};

export default AddToDo;
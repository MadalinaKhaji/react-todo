import React from 'react';
import uniqid from 'uniqid';

const AddToDo  = ({ inputText, setInputText, todos, setTodos, filterOption, setFilterOption }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if(inputText !== '') {
            setTodos([
                ...todos, { id: uniqid(), text: inputText, isComplete: false}
            ]);
    
            setInputText('');
        }
    };

    const filterHandler = (e) => {
        setFilterOption(e.target.value)
    };

    return (
        <div className="add-container">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text"/>
                <button onClick={submitHandler} type="submit">
                    <span className="material-icons plus-icon">add</span> Add</button>
            </form>
            <select onClick={filterHandler} id="filterOptions" name="options">
                <option value="all">All</option>
                <option value="completed">Complete</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}

export default AddToDo;

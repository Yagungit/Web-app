import React, { useState } from 'react';


function TodoForm( props ) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
        id: Math.floor(Math.random() * 10000), //when empty creates a bug with empty ids
        task: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
            <>
            <input
                placeholder='Update your item'
                autoComplete='off'
                value={input}
                onChange={handleChange}
                name='task'
                className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
                Update
            </button>
            </>
        ) : (
            <>
            <input
                placeholder='Add new entry'
                autoComplete='off'
                value={input}
                onChange={handleChange}
                name='task'
                className='todo-input'
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add todo
            </button>
            </>
        )}
        </form>
    );
}

export default TodoForm;

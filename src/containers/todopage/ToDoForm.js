import React, { useState, useEffect, useRef } from 'react';


function TodoForm( props, {todos} ) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
        id: Math.floor(Math.random() * 10000),
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
                ref={inputRef}
                className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
                Update
            </button>
            </>
        ) : (
            <>
            <input
                placeholder='Add a todo'
                autoComplete='off'
                value={input}
                onChange={handleChange}
                name='task'
                className='todo-input'
                ref={inputRef}
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

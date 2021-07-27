import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        edit: false
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
        id: null,
        value: '',
        edit: false
        });
    };

    if (edit.edit) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
            >
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='icon'
                />
                <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.task, edit: true })}
                className='icon'
                />
            </div>
            <div className='.todo-line'></div>
            <div className='todo-text' key={todo.id} onClick={() => completeTodo(todo.id)} >
                {todo.task}
            </div>
        </div>
    ));
    };

    export default Todo;

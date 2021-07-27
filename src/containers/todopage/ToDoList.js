import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import data from './data.json';
import './TodoStyle.css';

function TodoList() {

    let ToDoData;
    
    
    if (localStorage.getItem('ToDoData')) {
        ToDoData = JSON.parse(localStorage.getItem('ToDoData'));
    } else {
        ToDoData = data;
        localStorage.setItem('ToDoData', JSON.stringify(ToDoData));
    }

    const [todos, setTodos] = useState(ToDoData);

    const addTodo = todo => {
        if (!todo.task || /^\s*$/.test(todo.task)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        localStorage.setItem('ToDoData', JSON.stringify(newTodos));
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.task || /^\s*$/.test(newValue.task)) {
        return;
        }
        setTodos(prev => todos.map(item => (item.id === todoId ? newValue : item)));
        localStorage.setItem('ToDoData', JSON.stringify(todos));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
        localStorage.setItem('ToDoData', JSON.stringify(removedArr));

    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem('ToDoData', JSON.stringify(updatedTodos));
    };

    return (
        <div className='todo-app'>
        <h2>What's your plans?</h2>
        <TodoForm 
            onSubmit={addTodo} 
            todos={todos}
        />
        <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
        </div>
    );
}



export default TodoList;

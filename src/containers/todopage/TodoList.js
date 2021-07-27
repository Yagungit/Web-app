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

    const correctId = (todos) => {

        let corrected = todos.map((todo, index) => {
            todo.id = index + 1;
            index++;
            return todo
        });

        setTodos(corrected);
        localStorage.setItem('ToDoData', JSON.stringify(corrected));
        console.log(...todos);
        return corrected;

    }

    const addTodo = todo => {
        if (!todo.task || /^\s*$/.test(todo.task)) {
            return;
        }
        const newTodos = [todo, ...todos];

        correctId(newTodos);
        setTodos(newTodos);
        localStorage.setItem('ToDoData', JSON.stringify(newTodos));
        console.log(...todos);

    };


    const updateTodo = (todoId, newValue) => {
        if (!newValue.task || /^\s*$/.test(newValue.task)) {
            return;
        }
        
        let update = todos.map(item => (item.id === todoId ? newValue : item));
        correctId(update);
        setTodos(update);
        localStorage.setItem('ToDoData', JSON.stringify(update));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        correctId(removedArr);
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

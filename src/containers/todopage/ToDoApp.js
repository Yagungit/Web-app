import React, { useState } from 'react';
//mock data
import data from './data.json';
//components
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import './ToDoStyles.css';

function ToDoApp () {

    let ToDoData;
    
    if (localStorage.getItem('ToDoData')) {
        ToDoData = JSON.parse(localStorage.getItem('ToDoData'));
    } else {
        ToDoData = data;
    }
    
    const [ toDoList, setToDoList ] = useState(ToDoData);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        mapped.forEach((task, index) => task.id = index + 1);
        localStorage.setItem('ToDoData', JSON.stringify(mapped));
        setToDoList(mapped);
        console.log('togle');
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        let sorted = filtered.forEach((task, index) => task.id = index + 1);
        localStorage.setItem('ToDoData', JSON.stringify(sorted));
        setToDoList(sorted);
        console.log('filter');
    }

    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        localStorage.setItem('ToDoData', JSON.stringify(copy));
        setToDoList(copy);
    }

    return (
        <div className='ToDoApp'>
        <Header />
        <ToDoForm addTask={addTask}/>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        </div>
    );
}

export default ToDoApp;
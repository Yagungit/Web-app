import React, { useState } from 'react';
import CustomButton from '../../components/button/button';
import CustomInput from '../../components/input/input';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }
    return (
        <form onSubmit={handleSubmit}>
             <CustomInput value={userInput} type='text' onChange={handleChange} placeholder='Enter task...'/>
             <CustomButton>Submit</CustomButton>
        </form>
    );
};

export default ToDoForm;
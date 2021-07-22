import React from 'react';
import ToDo from './ToDo';
import CustomButton from '../../components/button/button';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <CustomButton style={{width: '160px'}} onClick={handleFilter}>Clear Completed</CustomButton>
        </div>
    );
};

export default ToDoList;
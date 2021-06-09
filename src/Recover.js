import React from 'react';
import Button from './button/button';
import Input from './input/input';


const Recover = () => (
    <div className='center'>
        <h1>Password recovery</h1>
        <p> Please input your email</p>
        <div>{Input('Email', 'text', '30')}</div>
        {Button('Submit')}
    </div>
);

export default Recover;
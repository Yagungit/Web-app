import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/button/button';
import Input from '../components/input/input';


const Recover = () => (
    <div className='center'>
        <h1>Password recovery</h1>
        <p> Please input your email</p>
        <div>
            {Input('Email', 'text', '30')}
        </div>
        <div>
            {Button('Submit')}
        </div>
        <div className='LinkRecover'>
        <NavLink exact to='/register'>Don't have an account?</NavLink>
        </div>
    </div>
);

export default Recover;
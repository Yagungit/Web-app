import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/button/button.js'
import Input from '../components/input/input.js';


const Register = () => (
    <div className='center'>
        <h1>Register</h1>
        <div>
        {Input('Username', 'text')}
        </div>
        <div>
        {Input('Password', 'password')}
        </div>
    
        <div>
        {Input('Confirmation', 'password')}
        </div>
        <div>
            {Button('Register')}
        </div>
        <div className='LinkRecover'>
            <NavLink exact to='/recover'>Forgot your password?</NavLink>
        </div>
    </div>
);

export default Register;
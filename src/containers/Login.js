import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/button/button.js'
import Input from '../components/input/input.js';


const Login = () => (
<div className='center'>
    <div >
        <h1>Login</h1>
    </div>
    <div>
        {Input('Username', 'text')}
    </div>
    <div>
        {Input('Password', 'password')}
    </div>
    <div>
        {Button('Login')}
    </div>
    <div className='LinkRecover'>
    <NavLink exact to='/register'>Don't have an acount</NavLink>|<NavLink exact to='/recover'>Forgot your password?</NavLink>
    </div>
</div>
);

export default Login;
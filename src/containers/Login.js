import React from 'react';
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
</div>
);

export default Login;
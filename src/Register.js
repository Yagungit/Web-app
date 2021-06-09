import React from 'react';
import { NavLink } from 'react-router-dom';


const Register = () => (
    <div className="center">
        <h1>Register</h1>
        <div>
            <input autocomplete="off" autofocus name="username" placeholder="Username" type="text"></input>
        </div>
        <div>
            <input name="password" placeholder="Password" type="password"></input>
        </div>
        <div>
            <input name="confirmation" placeholder="Confirmation" type="password"></input>
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
        <div className="LinkRecover">
            <NavLink exact to='/recover'>Forgot your password?</NavLink>
        </div>
    </div>
);

export default Register;
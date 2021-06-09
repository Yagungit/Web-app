import React from 'react';


const Login = () => (
<div className="center">
    <div >
        <h1>Login</h1>
    </div>
    <div>
        <input autocomplete="off" autofocus name="username" placeholder="Username" type="text"></input>
    </div>
    <div>
        <input name="password" placeholder="Password" type="password"></input>
    </div>
        <button type="submit">Login</button>
</div>
);

export default Login;
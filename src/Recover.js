import React from 'react';


const Recover = () => (
    <div className="center">
        <h1>Password recovery</h1>
        <p> Please input your email</p>
        <div>
            <input autofocus size="30" name="text" placeholder="Email" type="text"></input>
        </div>
        <button type="submit">Submit</button>
    </div>
);

export default Recover;
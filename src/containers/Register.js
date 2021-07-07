import React, { useState } from "react";
import { NavLink, Redirect } from 'react-router-dom';
import CustomButton from '../components/button/button.js'
import Flash from '../components/flash/flash.js';
import Input from '../components/input/input.js';
import AuthState from '../contexts/AuthState.js';


const Register = () => {

    const [showResults, setshowFlash] = useState(false);
    const showFlash = () => {
        setshowFlash(true);
        setTimeout(() => {
            setshowFlash(false);
        }, 3000);
    }

        const [auth, setAuth] = useState(AuthState);
    

    function RegConfirm() {

        if (document.getElementById('password').value !== document.getElementById('confirmpassword').value){
            showFlash();
        }
        else if (document.getElementById('name').value === '')
        {
            showFlash();
        }
        else if (document.getElementById('password').value === '')
        {
            showFlash();
        }
        else {
            
            localStorage.setItem('user', document.getElementById('name').value);
            localStorage.setItem('password', document.getElementById('password').value);
            setAuth(true);
            console.log(auth)
            return (    
                <Redirect to= '/home'/>   
            );
        }
    }


    return( 
        <div className='center'>
            <h1>Register</h1>
            <div>
                { showResults ? <Flash message='Error'/> : <span>&nbsp;&nbsp;</span> }
            </div>
            <div>
                <Input type='text' name='text'  id='name' placeholder='Username'/>
            </div>
            <div>
                <Input type='password' name='password'  id='password' placeholder='Password'/>
            </div>
            <div>
                <Input type='password' name='password'  id='confirmpassword' placeholder='Confirmation'/>
            </div>
            <div>
                <CustomButton id='register' onClick={RegConfirm} text='Register'/>
            </div>
            <div className='LinkRecover'>
                <NavLink exact to='/login'>Already have an account?</NavLink>    
            </div>
        </div>
    );
}

export default Register;





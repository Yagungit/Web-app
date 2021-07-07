import React, { useState } from "react";
import {
    Redirect,
    NavLink } from 'react-router-dom';
import CustomButton from '../components/button/button.js';
import Input from '../components/input/input.js';
import Flash from '../components/flash/flash.js';
import  AuthState  from '../contexts/AuthState.js';



export default function Login () {

    const [showResults, setshowFlash] = useState(false);

    const showFlash = () => {
        setshowFlash(true);
        setTimeout(() => {
            setshowFlash(false);
        }, 3000);
    }

    const [auth, setAuth] = useState(AuthState);


    const LogIn = () => {
        
            localStorage.setItem('user', document.getElementById('name').value);
            localStorage.setItem('password', document.getElementById('password').value);
            setAuth(true);
            console.log(auth);
        
        return(    
            <Redirect to= '/home'/>   
        );
       
    }
    
    const LogConfirm = () => {

        if (document.getElementById('name').value !== localStorage.getItem('user')){
            showFlash();
        }
        else if (document.getElementById('password').value !== localStorage.getItem('password'))
        {
            showFlash();
        }

        else {
            LogIn();
        }
    }     
        
    return (
        <div className='center'>
            <div >
                <h1>Login</h1>
            </div>
                <div>
                    { showResults ? <Flash message='No match'/> : <span>&nbsp;&nbsp;</span> }
                </div>
            <div>
                <Input type='text' name='text'  id='name' placeholder='Username'/>
            </div>
            <div>
                <Input type='password' name='password'  id='password' placeholder='Password'/>
            </div>
            <div>
                <CustomButton id='login' onClick={LogConfirm} text='Login'/>
            </div>
            <div className='LinkRecover'>
                <NavLink exact to='/register'>Don't have an acount</NavLink>|<NavLink exact to='/recover'>Forgot your password?</NavLink>
            </div>
        </div>
    );
}
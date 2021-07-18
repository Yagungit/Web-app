import React, { useState } from "react";
import {useHistory, NavLink } from 'react-router-dom';
import CustomButton from '../components/button/button';
import Input from '../components/input/input';
import Flash from '../components/flash/flash';
import { useAuth } from '../contexts/AuthState';



export default function Login () {

    let history = useHistory();


    const [showResults, setshowFlash] = useState(false);

    const showFlash = () => {
        setshowFlash(true);
        setTimeout(() => {
            setshowFlash(false);
        }, 3000);
    }

    const { isAuthorized, setAuthStatus } = useAuth();


    const LogIn = () => {
        
            localStorage.setItem('user', document.getElementById('name').value);
            localStorage.setItem('password', document.getElementById('password').value);
            setAuthStatus(true);
            console.log(isAuthorized);
        
        return(    
            history.push('/home')   
        );
       
    }
    
    const LogConfirm = () => {

        let user = JSON.parse(localStorage.getItem('user'));

        if (document.getElementById('name').value !== user.user)
        {
            showFlash();
        }
        else if (document.getElementById('password').value !== user.password)
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
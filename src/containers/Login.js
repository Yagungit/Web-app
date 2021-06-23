import React, { useState, useContext, useEffect } from "react";
import {
    Switch,
    Route,
    Link,
    Redirect,
    NavLink,
    useHistory,
    useLocation } from 'react-router-dom';
import CustomButton from '../components/button/button.js';
import Input from '../components/input/input.js';
import Flash from '../components/flash/flash.js';
import  GlobalState  from '../contexts/GlobalState.js';



export default function Login () {

    const [showResults, setshowFlash] = useState(false);

    const showFlash = () => {
        setshowFlash(true);
        setTimeout(() => {
            setshowFlash(false);
        }, 3000);
    }

    let history = useHistory();

    const GoHome = () => history.push('/home')

    const [state, setState] = useContext(GlobalState);


    function LogIn() {
        localStorage.setItem('user', document.getElementById('name').value);
        localStorage.setItem('password', document.getElementById('password').value);
        return( 
            function() {
                setState(state => ({...state, auth: true}));
            }
        );
       
    }
    
    function LogConfirm() {

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
                {Input('Username', 'text', 'name')}
            </div>
            <div>
                {Input('Password', 'password', 'password')}
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
import React, { useContext, useEffect, setState } from "react";
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import CustomButton from '../components/button/button.js'
import Flash from '../components/flash/flash.js';
import Input from '../components/input/input.js';
import GlobalState from '../contexts/GlobalState.js';


const Register = () => {

    const [showResults, setshowFlash] = React.useState(false);
    const showFlash = () => {
        setshowFlash(true);
        setTimeout(() => {
            setshowFlash(false);
        }, 3000);
    }

        const [state, setState] = useContext(GlobalState);
    
        let history = useHistory();

        let called = false
    

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
            called = true
            localStorage.setItem('user', document.getElementById('name').value);
            localStorage.setItem('password', document.getElementById('password').value);
            setState(state => ({...state, auth: true}));
        }
    }

    useEffect(() => {
        if (called) {
            history.push('/home');
        }
    }, [state.auth]);

    return( 
        <div className='center'>
            <h1>Register</h1>
            <div>
            { showResults ? <Flash message='Error'/> : <span>&nbsp;&nbsp;</span> }
            </div>
            <div>
                {Input('Username', 'text', 'name')}
            </div>
            <div>
                {Input('Password', 'password', 'password')}
            </div>
            <div>
                {Input('Confirmation', 'password', 'confirmpassword')}
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





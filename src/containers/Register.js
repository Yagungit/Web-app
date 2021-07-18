import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import CustomButton from '../components/button/button'
import Flash from '../components/flash/flash';
import Input from '../components/input/input';
import { useAuth } from '../contexts/AuthState';


const Register = () => {

    let history = useHistory();

    const [showResults, setShowFlash] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const ShowFlash = (message) => {
        setErrorMessage(message);
        setShowFlash(true);
        setTimeout(() => {
            setShowFlash(false);
        }, 3000);
    }

    const { isAuthorized, setAuthStatus } = useAuth();
    
    function RegConfirm() {

        if (document.getElementById('name').value === '')
        {
            ShowFlash('Invalid Name');
        }
        else if (document.getElementById('password').value === '')
        {
            ShowFlash('Invalid Password');
        }
        else if (document.getElementById('password').value !== document.getElementById('confirmpassword').value) 
        {
            ShowFlash(`Passwords doesn't match`);
        } else {

            let user = {
                user: document.getElementById('name').value,
                password: document.getElementById('password').value
            }
            
            localStorage.setItem('user', JSON.stringify(user));

            setAuthStatus(true);
            console.log(isAuthorized)
            history.push('/home')
        }
    }


    return( 
        <div className='center'>
            <h1>Register</h1>
            <div>
                { showResults ? <Flash message={errorMessage}/> : <span>&nbsp;&nbsp;</span> }
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





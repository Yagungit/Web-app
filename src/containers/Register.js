import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import CustomButton from '../components/button/button'
import Flash from '../components/flash/flash';
import CustomInput from '../components/input/input';
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
    
    function RegConfirm(event) {
        event.preventDefault();

        let userInputName = document.getElementById('name').value;  
        let userInputPassword = document.getElementById('password').value;
        let userInputConfirm = document.getElementById('confirmpassword').value;

        if (userInputName.length <= 5)
        {
            ShowFlash('Name should consist of minimum 6 characters!');
        }
        else if (userInputPassword.length <= 5)
        {
            ShowFlash('Password should consist of minimum 6 characters!');
        }
        else if (userInputPassword !== userInputConfirm) 
        {
            ShowFlash(`Passwords doesn't match, please check again!`);
        } else {

            let user = {
                user: document.getElementById('name').value,
                password: document.getElementById('password').value
            }
            
            localStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('auth', 'true');
            setAuthStatus(true);
            console.log(isAuthorized)
            history.push('/home')
        }
    }


    return( 
        <div className='center'>
            <h1>Register</h1>
            <div>
                { showResults ? 
                <Flash message={errorMessage}/> : 
                <div>
                    <div>
                        <span>&nbsp;&nbsp;</span>
                    </div>
                    <div>
                        <span>&nbsp;&nbsp;</span>
                    </div>
                </div>}
            </div>
            <form onSubmit={RegConfirm}>
                <div>
                    <CustomInput type='text' name='text'  id='name' placeholder='Username'/>
                </div>
                <div>
                    <CustomInput type='password' name='password'  id='password' placeholder='Password'/>
                </div>
                <div>
                    <CustomInput type='password' name='password'  id='confirmpassword' placeholder='Confirmation'/>
                </div>
                <div>
                    <CustomButton type='submit' id='register'>
                        Register
                    </CustomButton>
                </div>
            </form>
            <div className='LinkRecover'>
                <NavLink exact to='/login'>Already have an account?</NavLink>    
            </div>
        </div>
    );
}

export default Register;





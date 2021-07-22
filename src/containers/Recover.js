import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomButton from '../components/button/button';
import CustomInput from '../components/input/input';


const Recover = () => (
    <div className='center'>
        <h1>Password recovery</h1>
        <p> Please input your email</p>
        <form>
            <div>
                <CustomInput type='text' name='email'  id='email' placeholder='Email' size='30'/>
            </div>
            <div>
                <CustomButton id='submit' onClick={() => { alert('Option yet to be implemented') }}>
                    Submit
                </CustomButton>
            </div>
        </form>
        <div className='LinkRecover'>
            <NavLink exact to='/register'>Don't have an account?</NavLink>
        </div>
    </div>
);

export default Recover;
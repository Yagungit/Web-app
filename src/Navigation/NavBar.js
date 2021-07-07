import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AuthState from '../contexts/AuthState.js';


/*<a href='#home' class='active'>Home</a>*/

/*<NavLink> equivalent to <a> tag in css styles*/


const NavigationBar = () => {
    
    const [auth, setAuth] = useState(AuthState);

    function LogOut() {
        localStorage.clear();
        setAuth(false);
        console.log(auth);
        return <Redirect to= '/home'/> 
    }

    function LogInOut() {
        
        if (auth) {
            return (
                <NavLink className= 'Link' onClick={LogOut} exact to='/'>Logout</NavLink>
            )
        } else {
            return (
                <div>
                <NavLink className= 'Link' exact to='/register'>Register</NavLink>
                <NavLink className= 'Link' exact to='/login'>Login</NavLink>
                </div>
            )
        }

    }

    return (

            <div className='NavBar'>
                <NavLink className= 'Link' exact to='/home'>Home</NavLink>
                <NavLink className= 'Link' exact to='/private'>Private</NavLink>
                <div className='Login'>
                <LogInOut/>
                </div>
            </div>
    );
}

export default NavigationBar;
import React, { useContext, useEffect } from 'react';
import { BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import GlobalState from '../contexts/GlobalState.js';


/*<a href='#home' class='active'>Home</a>*/

/*<NavLink> equivalent to <a> tag in css styles*/


const NavigationBar = () => {
    
    const [state, setState] = useContext(GlobalState);

    let called = false;

    const refreshPage = ()=>{
        window.location.reload();
     }

    function LogOut() {
        return function() {
            localStorage.clear();
            setState(state => ({...state, auth: false}));

        }    
    }

    function LogInOut() {
        
        if (state.auth) {
            return(
                <NavLink className= 'Link' onClick={LogOut} exact to='/'>Logout</NavLink>
            )
        } else {
            return(
                <NavLink className= 'Link' exact to='/login'>Login</NavLink>
            )
        }

    }




    return (
    <div className='NavBar'>
        <a  className='icon'>
            <i className='fa fa-bars'></i>
        </a>
        <NavLink className= 'Link' exact to='/home'>Home</NavLink>
        <div id='myLinks'>
        <NavLink className= 'Link' exact to='/register'>Register</NavLink>
        <LogInOut/>
        </div>
    </div>
    );
}


export default NavigationBar;
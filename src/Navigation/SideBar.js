
import React, { useState } from 'react'
import { RiMenuLine, RiCloseFill, RiHome4Fill, RiLogoutBoxFill, RiBriefcase4Fill, RiLoginBoxFill, RiRegisteredFill } from 'react-icons/ri'
import './Home.ico'
import './SideBar.css'
import { NavLink, Redirect } from 'react-router-dom';
import AuthState from '../contexts/AuthState.js';

function SideBar() {
    const SidebarCollapsed = localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = useState(SidebarCollapsed ? false : true);

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('sidebar-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('sidebar-collapsed');
    }
    const [auth, setAuth] = useState(AuthState);

    function LogOut() {
        localStorage.clear()
        setAuth(false);
        return <Redirect to= '/home'/> 
    }

    function LogInOut() {
        
        if (auth) {
            return (
                <div className='item'>
                        <RiLogoutBoxFill className='sidebar-icon' />
                        <NavLink className= 'sidebar-text' onClick={LogOut} exact to='/'>Logout</NavLink>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='item'>
                        <RiRegisteredFill className='sidebar-icon' />
                        <NavLink className= 'sidebar-text' exact to='/register'>Register</NavLink>
                    </div>
                    <div className='item'>
                        <RiLoginBoxFill className='sidebar-icon' />
                        <NavLink className= 'sidebar-text' exact to='/login'>Login</NavLink>
                    </div>
                </div>
            )
        }

    }


    return(
        <div>
            <div className='TopLine'></div>
            <div className={isExpanded ? 'SideBar' : 'SideBar collapsed'}>
                <div className='sidebar-header'>
                    {isExpanded ?  <>
                        <RiCloseFill className='sidebar-icon' onClick={handleToggler}/>
                        <h1 className='sidebar-logo'>Menu</h1>
                        </> : <RiMenuLine className='sidebar-icon' onClick={handleToggler} /> 
                    }
                </div>
                <div className='sidebar-items'>
                    <div className='item'>
                        <RiHome4Fill className='sidebar-icon' />
                        <NavLink className= 'sidebar-text' exact to='/home'>Home</NavLink>
                    </div>
                    <div className='item'>
                        <RiBriefcase4Fill className='sidebar-icon' />
                        <NavLink className= 'sidebar-text' exact to='/private'>Private</NavLink>
                    </div>
                    <LogInOut/>
                </div>
            </div>
        </div>
    );

}

export default SideBar;
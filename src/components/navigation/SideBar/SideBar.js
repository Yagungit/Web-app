import React, { useState } from 'react'
import { RiMenuLine, RiCloseFill, RiHome4Fill, RiLogoutBoxFill, RiLoginBoxFill, RiRegisteredFill } from 'react-icons/ri'
import { FaListAlt, FaDog } from "react-icons/fa";

import './SideBar.css'
import { NavLink,  useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthState';

function SideBar() {
    let history = useHistory();
    
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
        
    const { isAuthorized, setAuthStatus } = useAuth();

    function LogOut() {

        localStorage.removeItem('user');

        setAuthStatus(false);
        console.log(isAuthorized);
        history.push('/home') 
    }

    function LogInOut() {
        
        if (isAuthorized) {
            return (
                <div >
                    <div className='item'>
                            <RiLogoutBoxFill className='sidebar-icon' />
                            <NavLink className= 'sidebar-text' onClick={LogOut} exact to='/'>Logout</NavLink>
                    </div>
                </div>
            )
        } else {
            return (
                <div >
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
                        <FaListAlt className='sidebar-icon' />
                        <NavLink className= 'sidebar-text' exact to='/todo'>To do list</NavLink>
                    </div>
                    <div className='item'>
                        <FaDog className='sidebar-icon' />
                        <NavLink className= 'sidebar-text' exact to='/dogs'>Dogs</NavLink>
                    </div>
                    <LogInOut/>
                </div>
            </div>
        </div>
    );

}

export default SideBar;

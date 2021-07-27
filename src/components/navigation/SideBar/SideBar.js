import React, { useState } from 'react'
import { RiMenuLine, RiCloseFill, RiHome4Fill, RiLogoutBoxFill, RiLoginBoxFill, RiRegisteredFill } from 'react-icons/ri'
import { FaListAlt, FaDog } from "react-icons/fa";
import './SideBar.css'
import { NavLink,  useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthState';

function SideBar() {
    
    let history = useHistory();

    React.useEffect(() => {    
        localStorage.removeItem('sidebar-collapsed');
        setIsExpanded(false);
    }, []);

    const [isExpanded, setIsExpanded] = useState({ SidebarCollapsed : false });

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
        sessionStorage.removeItem('auth');
        setAuthStatus(false);
        console.log(isAuthorized);
        history.push('/home') 
    }

    function LogInOut() {
        
        if (isAuthorized) {
            return (
                <div >
                            <NavLink className= 'sidebar-text' onClick={LogOut} exact to='/'>
                                <div className='item'>
                                <RiLogoutBoxFill className='sidebar-icon' />
                                Logout
                                </div>
                            </NavLink>
                    
                </div>
            )
        } else {
            return (
                <div >
                        <NavLink className= 'sidebar-text' exact to='/register'>
                            <div className='item'>
                            <RiRegisteredFill className='sidebar-icon' />
                            Register
                            </div>
                        </NavLink>
                   
                        <NavLink className= 'sidebar-text' exact to='/login'>
                            <div className='item'>
                            <RiLoginBoxFill className='sidebar-icon' />
                            Login
                            </div>
                        </NavLink>
                   
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
                        <h1 className='sidebar-logo position' >Menu</h1>
                        </> : <RiMenuLine className='sidebar-icon' onClick={handleToggler} /> 
                    }
                </div>
                <div className='sidebar-items'>
                    
                        <NavLink className= 'sidebar-text' exact to='/home'>
                            <div className='item'>
                            <RiHome4Fill className='sidebar-icon' />Home
                            </div>
                        </NavLink>
            
                        <NavLink className= 'sidebar-text' exact to='/todo'>
                            <div className='item'>
                            <FaListAlt className='sidebar-icon' />
                            To do list
                            </div>
                        </NavLink>
                    
                        <NavLink className= 'sidebar-text' exact to='/dogs'>
                            <div className='item'>
                            <FaDog className='sidebar-icon' />
                            Dogs API
                            </div>
                        </NavLink>
                    
                    <LogInOut/>
                </div>
            </div>
        </div>
    );

}

export default SideBar;

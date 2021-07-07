import React, { useState } from 'react'
import { RiMenuLine, RiLayoutGridFill, RiChat4Fill, RiTeamFill, RiTaskFill, RiPieChart2Fill } from 'react-icons/ri'
import './Home.ico'
import './SideBar.css'

function SideBar() {
    const SidebarCollapsed = localStorage.getItem('sidebar-colapsed');
    const [isExpanded, setIsExpansed] = useState(SidebarCollapsed ? false : true);

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpansed(false);
            localStorage.setItem('sidebar-collased', true);
            return;
        }
        setIsExpansed(true);
        localStorage.removeItem('sidebar-collased');
    }

    return(
        <div className={isExpanded ? 'Sidebar' : 'Sidebar collapsed'}>
            <div className='sidebar-header'>
                <RiMenuLine className='sidebar-icon' onClick={handleToggler} />
                <h1 className='sidebar-logo'>LOGO</h1>
            </div>
            <div className='sidebar-items'>
                <div className='item'>
                    <RiLayoutGridFill className='sidebar-icon' />
                    <span className='sidebar-text'>Dashboard</span>
                </div>
                <div className='item'>
                    <RiChat4Fill className='sidebar-icon' />
                    <span className='sidebar-text'>Chat</span>
                </div>
                <div className='item'>
                    <RiTeamFill className='sidebar-icon' />
                    <span className='sidebar-text'>Teams</span>
                </div>
                <div className='item'>
                    <RiTaskFill className='sidebar-icon' />
                    <span className='sidebar-text'>Tasks</span>
                </div>
                <div className='item'>
                    <RiPieChart2Fill className='sidebar-icon' />
                    <span className='sidebar-text'>Analitics</span>
                </div>
            </div>
        </div>
    );

}

export default SideBar;

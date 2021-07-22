import React, {useEffect, useState} from "react";
import NavigationBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';


function Navigation() {

    const [width,setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }
    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

    let isMobile = (width >= 768) ? false : true;

 
    if (isMobile) {
        return(
            <SideBar />  
        );
    } else {
        return(   
            <NavigationBar />
        );
    }

}

export default Navigation;


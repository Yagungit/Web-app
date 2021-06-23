import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import  GlobalState  from '../contexts/GlobalState.js';





function Home() {
    const [state, setState] = useContext(GlobalState);

    let history = useHistory();

    useEffect(() => {
        if (state.auth === false) {
            history.push('/login');
        }
    }, []);

    return (
        
        <div className='home'><h1>Home Screen</h1></div>
    );
  }

  export default Home;
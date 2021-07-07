import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebPage from './WebPage';
import './Styles.css'
import AuthState from './contexts/AuthState';


const App = () => {
    const [auth, setAuth] = useState(AuthState);
    return (    
            <BrowserRouter>
                <AuthState.Provider value={{auth, setAuth}}>
                    <WebPage />
                </AuthState.Provider>
            </BrowserRouter>
    );
  }


ReactDOM.render(
    (<App/>),
    document.getElementById('root'),
);

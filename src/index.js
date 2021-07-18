import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebPage from './WebPage';
import './Styles.css'
import { AuthContextProvider } from './contexts/AuthState';


const App = () => {

    return (  
        <BrowserRouter>
            <AuthContextProvider> 
                <WebPage />
            </AuthContextProvider>
        </BrowserRouter>
    );
  }


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);

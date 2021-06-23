import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebPage from './WebPage';
import './Styles.css'
import GlobalState from './contexts/GlobalState';

function App() {  
    const [state, setState] = useState({auth: false});  
    return (    
        <GlobalState.Provider value={[state, setState]}>
            <BrowserRouter>
                <WebPage />
            </BrowserRouter>
        </GlobalState.Provider>
    );
  }


ReactDOM.render(
    (<App/>),
    document.getElementById('root'),
);

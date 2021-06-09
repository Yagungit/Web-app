import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebPage from './WebPage';
import './Styles.css'


ReactDOM.render(
    (<BrowserRouter>
    <WebPage />
    </BrowserRouter>),
    document.getElementById('root'),
);

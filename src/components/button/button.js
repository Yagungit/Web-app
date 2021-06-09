import React from 'react';
import './button.css'

function Button (text) {
    if ( text === undefined ) {
        text = 'Hello!';
    }
    return (
        <button class='button red'>{text}</button>
    );
}

export default Button
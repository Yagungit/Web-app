import React from 'react';
import './input.css';

function Input (placeholder, type, size) {

    if ( placeholder === undefined ) {
        placeholder = 'Hello, world!';
    }
    
    if ( type === undefined ) {
        type = 'text';
    }

    if ( size === undefined ) {
        size = '20';
    }

    return (
        <div class='field'>
          <input type={type} name={type} size={size} autocomplete='off' required/>
          <label>{placeholder}</label>
        </div>
      
    );
}

export default Input


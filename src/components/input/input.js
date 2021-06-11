import React from 'react';
import './input.css';

function Input (placeholder, type, id, size) {

    if ( placeholder === undefined ) {
        placeholder = 'Hello, world!';
    }
    
    if ( type === undefined ) {
        type = 'text';
    }

    if ( size === undefined ) {
        size = '20';
    }

    if ( id === undefined ) {
        size = 'standart';
    }

    return (
        <div class='field'>
          <input type={type} name={type} size={size} id={id} autocomplete='off' required/>
          <label>{placeholder}</label>
        </div>
      
    );
}

export default Input


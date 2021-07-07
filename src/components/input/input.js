import React from 'react';
import './input.css';

const Input = (props) => {

    let {placeholder, type, id, size} = props

    if ( placeholder === undefined ) {
        placeholder = 'Hello!';
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
        <div className='field'>
          <input type={type} name={type} size={size} id={id} autoComplete='off' required/>
          <label>{placeholder}</label>
        </div>
      
    );
}

export default Input


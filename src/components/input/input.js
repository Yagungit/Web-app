import React from 'react';
import './input.css';

const CustomInput = ({placeholder, ...props}) => {

    if ( placeholder === undefined ) {
        placeholder = 'Hello!';
    }

    return (
        <div className='field'>
          <input autoComplete='off' required {...props}/>
          <label>{placeholder}</label>
        </div>
      
    );
}

export default CustomInput


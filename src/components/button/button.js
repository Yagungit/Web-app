import React from 'react';
import './button.css'



const CustomButton = (props) => {  
    let {onClick, text} = props
    return (
        <button type='button' className= 'button red' onClick={onClick}>{text || 'button'}</button>
    );
}

export default CustomButton

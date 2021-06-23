import React from 'react';
import './button.css'



const CustomButton = ({onClick, text}) => {  

    return (
        <button type='button' class='button red' onClick={onClick}>{text || 'button'}</button>
    );
}

export default CustomButton

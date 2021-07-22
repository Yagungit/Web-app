import React from 'react';
import './button.css'



const CustomButton = ({children, ...props}) => {
    return (
        <button  className= 'button red' {...props}>
        {children || 'button'}
        </button>
    );
}

export default CustomButton

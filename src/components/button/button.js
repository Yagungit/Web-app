import React from 'react';
import './button.css'



const CustomButton = ({type, children, ...props}) => {
    return (
        <button type={type || 'button'} className= 'button red' {...props}>
        {children || 'button'}
        </button>
    );
}

export default CustomButton

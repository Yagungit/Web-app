import React from 'react';
import './flash.css'

const Flash = (props) => {

    let {message, id} = props

    return (
        <div className='flash'>
            <div className='message' id={id}>{message || 'Hello!'}</div>
        </div>
    );
}


export default Flash


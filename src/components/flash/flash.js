import React from 'react';
import './flash.css'

const Flash = ({message, id}) => {


    return (
        <div className='Flash'>
            <img className='warnning'  alt=''></img>
            <label id={id}>{message || 'Hello!'}</label>
        </div>
    );
}

export default Flash


import React from 'react';
import './flash.css'

const Flash = ({message, id}) => {


    return (
        <div className='Flash'>
            <img className='warnning'  alt=''></img>
            <lable id={id}>{message || 'Hello!'}</lable>
        </div>
    );
}

export default Flash


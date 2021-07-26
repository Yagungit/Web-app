import React from 'react';
import './spinner.css';
import { FaCog } from 'react-icons/fa'

const Spinner = () => {
    return(
        <div>
            <FaCog className='spinner'/>
        </div>
    )
}

export default Spinner;
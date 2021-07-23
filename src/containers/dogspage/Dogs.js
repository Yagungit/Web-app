import React from 'react';


const Dogs = ({dog}) => {
    return (
        <div>
            <div className='dog-img'>
              <img alt='dog' src={dog.url} />
            </div>
        </div>
    )
}

export default Dogs;



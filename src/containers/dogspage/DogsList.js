import React from 'react';
import Dogs from './Dogs';


const DogsList = ({DogImg}) => {
    console.log('Dogs Listed')
    return(
        <div>
            <div>
                {DogImg.map(dog => {
                        return (
                            <Dogs dog={dog} />
                        )
                })}
            </div>
        </div>
    );
}

export default DogsList;
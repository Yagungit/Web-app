import React from 'react';

const DogsBreedList = ({DogList}) => {
    return (
        <div>
            {DogList.breed.map(e => 
                <div>{e}</div>
                )}
        </div>
    )
}

export default DogsBreedList;
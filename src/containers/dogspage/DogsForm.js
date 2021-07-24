import React from 'react';
import CustomButton from '../../components/button/button';


const DogsForm = ({getRandomImage, getBreed}) => {
    return(
        <div className='center' >   
                <CustomButton style={{width: '160px'}} onClick={getRandomImage}>Random dog</CustomButton>
                <CustomButton style={{width: '160px'}} onClick={getBreed}>Choose breed</CustomButton>

        </div>
    )
}

export default DogsForm;
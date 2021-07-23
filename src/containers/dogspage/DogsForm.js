import React from 'react';
import CustomButton from '../../components/button/button';


const DogsForm = ({getRandomImage}) => {
    return(
        <div>   
                <CustomButton style={{width: '160px'}} onClick={getRandomImage}>Random dog</CustomButton>
        </div>
    )
}

export default DogsForm;
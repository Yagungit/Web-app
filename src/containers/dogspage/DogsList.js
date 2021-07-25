import React from 'react';



const DogsList = ({DogImg, DogList}) => {
    console.log('Dogs Listed')
    if (DogList.isLoaded) {
        return(
                <div className='DogList' >
                    {DogImg.imgURL.map(dog => {
                        let imgURL = new URL(dog);
                        let pathArray =  imgURL.pathname.split('/');
                        let breed = pathArray[2];
                            return (
                                <div className='DogList'>
                                    <div className='dog-img'>
                                    <img alt='dog' src={dog} />
                                    <div className='breed'>
                                        <h3>{breed}</h3>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        );

    } else {
        return(
            <div/>
        )    
    }
}

export default DogsList;
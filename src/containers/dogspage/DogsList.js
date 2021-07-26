import React from 'react';



const DogsList = ({ DogList }) => {
    console.log('Dogs Listed')
    console.log(DogList.imgURL[1])
        return(
                <div className='DogList' >
                    {DogList.imgURL.map(dog => {
                        let imgURL = new URL(dog);
                        let pathArray =  imgURL.pathname.split('/');
                        let breed = pathArray[2];
                            return (
                                <div key={pathArray} className='DogList'>
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

}

export default DogsList;
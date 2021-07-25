import React, { useState } from 'react';
import './DogsStyle.css'
import Header from './Header';
import DogsForm from './DogsForm';
import DogsList from './DogsList';


const DogsApp = () => {

    
    const [ DogList, setDogList ] = useState(
        {imgURL: '',
        breed: '',
        select: '',
        isLoaded: false
        }
    );

    //const [DogSelected, setDogSelected] = useState ({ 
    //    select: ''
    //});

    const [DogImg, setDogImg] = useState ({ imgURL: [] });

    const [DogDisplay,setDogDisplay] = useState( [{
        displayRandom: false,
        displayBreed: false,
        displayImg: false
        }
    ]);

    let chosenBreed; //temp fix. Change to state control later
    
    const getDogImage = (e) => {
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayBreed: false });

        //chosenBreed is temp fix change to ${DogList.select}
        let imgURL = `https://dog.ceo/api/breed/${chosenBreed}/images/random/12`; 
        console.log(imgURL)
        fetch(imgURL)
            .then(res => res.json())
            .then(data => {
                let random = { imgURL: data.message };
                setDogImg(random);
                console.log(data.message)
            })
            .catch(err => {
                console.log('error fetching image');
            });
        setDogDisplay({ displayImg: true }); 
        setDogList({ isLoaded: true });   
    };
    
    //async function fetchBreed() {
    //    const response = await fetch('https://dog.ceo/api/breeds/list');
    //    const breed = await response.json();
    //    return breed;
    //  }

    const getBreed = () => {
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayImg: false });
        fetch('https://dog.ceo/api/breeds/list')
            .then(res => res.json())
            .then(breed => {
                setDogList({breed: breed.message});
                setDogDisplay({ displayBreed: true });
            })
            .catch(err => {
                console.log('error fetching list');
            });
        console.log (DogList);
    } 
    
    const getRandomImage = () => {
        setDogList({ isLoaded: false });
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayImg: false });
        setDogDisplay({ displayBreed: false });
        fetch('https://dog.ceo/api/breeds/image/random/12')
            .then(res => res.json())
            .then(data => {
                let random = { imgURL: data.message };
                setDogImg(random);
                setDogDisplay({ displayRandom: true });
                setDogList({ isLoaded: true });
            })
            .catch(err => {
                console.log('error fetching image');
            });
    };
        
    
    const handleSelect = (e) => {
        setDogList({ 
            select: e.currentTarget.id,
            isLoaded: false
        });
        
        chosenBreed = e.currentTarget.id;        //temp fix
        console.log(e.currentTarget.id);
        getDogImage();
    }

    const DogsBreedList = () => {
        return (
            <div>
                {DogList.breed.map(breed => 
                    <div id={breed}  onClick={handleSelect} className='DogsBreedList'>{breed}</div>
                    )}
            </div>
        )
    }
    
return (
        <div >
            <Header/>
            <DogsForm getRandomImage={getRandomImage} getBreed={getBreed} />
            { DogDisplay.displayRandom ? <DogsList DogImg={DogImg} DogList={DogList} /> : <div/> }
            { DogDisplay.displayBreed ? <DogsBreedList DogList={DogList} /> : <div/> }
            { DogDisplay.displayImg ? <DogsList DogImg={DogImg} DogList={DogList} /> : <div/> }

        </div>
)
}

export default DogsApp;
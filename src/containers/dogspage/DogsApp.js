import React, { useState } from 'react';
import './DogsStyle.css'
import Header from './Header';
import DogsForm from './DogsForm';
import DogsList from './DogsList';


const DogsApp = () => {

    const [ DogList, setDogList ] = useState(
        {imgURL: '',
        breed: '',
        select: ''
        }
    );

    const [DogSelected, setDogSelected] = useState ({ 
        select: ''
    });

    const [DogImg, setDogImg] = useState ();

    const [DogDisplay,setDogDisplay] = useState( [{
        displayRandom: false,
        displayBreed: false,
        displayImg: false
        }
    ]);
    
    const getDogImage = (e) => {
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayBreed: false });
        let url = `https://dog.ceo/api/breed/${DogSelected.select}/images/random/12`;
        console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let random = { url: data.message };
                    setDogImg(random);
                    setDogDisplay({ displayImg: true });
                    console.log(data.message)
                })
                .catch(err => {
                    console.log('error fetching image');
                });
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
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayImg: false });
        fetch('https://dog.ceo/api/breeds/image/random/12')
            .then(res => res.json())
            .then(data => {
                let random = { url: data.message };
                setDogImg(random);
                setDogDisplay({ displayRandom: true });
            })
            .catch(err => {
                console.log('error fetching image');
            });
    };
        
    
    const handleSelect = (e) => {
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayBreed: false });
        setDogSelected({ 
            select: e.currentTarget.id
        });
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
            {DogDisplay.displayRandom ? <DogsList DogImg={DogImg} /> : <div/> }
            {DogDisplay.displayBreed ? <DogsBreedList DogList={DogList} /> : <div/> }
            {DogDisplay.displayImg ? <DogsList DogImg={DogImg} /> : <div/>}

        </div>
)
}

export default DogsApp;
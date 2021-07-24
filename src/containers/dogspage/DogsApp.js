import React, { useState } from 'react';
import './DogsStyle.css'
import Header from './Header';
import DogsForm from './DogsForm';
import DogsList from './DogsList';
import DogsBreedList from './DogsBreedList';



const DogsApp = () => {

    const [ DogList, setDogList ] = useState(
        {imgURL: '',
        breed: '',
        select: ''
        }
    );

    const [DogImg, setDogImg] = useState ();

    const [DogDisplay,setDogDisplay] = useState( [{
        displayRandom: false,
        displayBreed: false,
        displayImg: false
        }
    ]);
    
    const getDogImage = () => {
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayBreed: false });
        let url = 'https://dog.ceo/api/breed/' + DogList.select + '/images/random';
            fetch(url)
                .then(response => {
                    setDogList({imgURL: response.data.message});
                    console.log(response.data.message)
                })
                .catch(err => {
                    console.log('error fetching image');
                });
    };
    
    async function fetchBreed() {
        const response = await fetch('https://dog.ceo/api/breeds/list');
        const breed = await response.json();
        return breed;
      }

    const getBreed = () => {
        setDogDisplay({ displayBreed: false });
        setDogDisplay({ displayImg: false });
        fetchBreed()
            .then(breed => {
                setDogList({breed: breed.message});
                
            })
            .catch(err => {
                console.log('error fetching list');
            });
        console.log (DogList);
    } 
    
    const  getRandomImage = () => {
        setDogDisplay({ displayRandom: false });
        setDogDisplay({ displayImg: false });
        fetch('https://dog.ceo/api/breeds/image/random/12')
            .then((res) => res.json())
            .then(data => {
                let random = { url: data.message };
                setDogImg(random);
                setDogDisplay({ displayRandom: true });
            })
            .catch(err => {
                console.log('error fetching image');
            });
    };
        
    
    const  handleSelect = (e) => {
        setDogList({
            select: e.target.value
        })
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
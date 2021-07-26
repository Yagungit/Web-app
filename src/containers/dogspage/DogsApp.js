import React, { useState } from 'react';
import './DogsStyle.css'
import Header from './DogsHeader';
import DogsForm from './DogsForm';
import DogsList from './DogsList';
import Spinner from '../../components/spinner/spinner';


const DogsApp = () => {

    
    const [ DogList, setDogList ] = useState(
        {imgURL: [],
        breed: '',
        select: '',
        isLoading: false,
        displayBreed: false,
        displayImg: false
        }
    );


    let chosenBreed; //temp fix. Change to state control later
    
    const getDogImage = () => {
        setDogList({ 
            displayImg: false,
            select: chosenBreed,
            isLoading: true 
        });   
        
        //chosenBreed is temp fix, change to ${DogList.select}
        let imgURL = `https://dog.ceo/api/breed/${chosenBreed}/images/random/12`; 
        console.log(imgURL)
        fetch(imgURL)
            .then(res => res.json())
            .then(data => {
                setDogList({ 
                    imgURL: data.message,
                    displayImg: true,
                    isLoading: false
                 });
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
        setDogList({ 
            isLoading: true,
            displayImg: false,
            displayBreed: false
         });
        fetch('https://dog.ceo/api/breeds/list')
            .then(res => res.json())
            .then(breed => {
                setDogList({
                    breed: breed.message,
                    isLoading: false,
                    displayBreed: true });
                })
            .catch(err => {
                console.log('error fetching list');
            });
        console.log (DogList);
    } 
    
    const getRandomImage = () => {
        setDogList({ 
            isLoading: true,
            displayImg: false,
            displayBreed: false });
        fetch('https://dog.ceo/api/breeds/image/random/12')
            .then(res => res.json())
            .then(data => {
                setDogList({ 
                    imgURL: data.message,
                    isLoading: false,
                    displayImg: true });
            })
            .catch(err => {
                console.log('error fetching image');
            });
    };
        
    
    const handleSelect = (e) => {
        setDogList({ 
            displayImg: false,
            displayBreed: false,
            select: e.currentTarget.id,
            isLoading: true,
        });
        chosenBreed = e.currentTarget.id;  //temp fix
  
        console.log(e.currentTarget.id); // Correctly display chosen value
        console.log(DogList.select); // still undefined ! ! !

        getDogImage();
    }

    const DogsBreedList = () => {
        return (
            <div>
                {DogList.breed.map(breed => 
                    <div key={breed} id={breed}  onClick={handleSelect} className='DogsBreedList'>{breed}</div>
                )}
            </div>
        )
    }

    const DisplayContent = () => {
        return (
            <div>            
            { DogList.displayBreed ? <DogsBreedList DogList={DogList} /> : <div/> }
            { DogList.displayImg ? <DogsList DogList={DogList} /> : <div/> }
            </div>
        )

    }
    
    return (
            <div >
                <Header/>
                <DogsForm getRandomImage={getRandomImage} getBreed={getBreed} />
                {DogList.isLoading ? <Spinner /> : <DisplayContent />}
            </div>
    )
}

export default DogsApp;
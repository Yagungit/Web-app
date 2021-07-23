import React, { useState } from 'react';
import './DogsStyle.css'
import Header from './Header';
import DogsForm from './DogsForm';
import DogsList from './DogsList';
import Dogs from './Dogs';


const DogsApp = () => {

    const [ DogList, setDogList ] = useState([
        {imgURL: [''],
        breed: [''],
        select: '',
        display: false}
    ]);

    const [DogImg, setDogImg] = useState ();
    
    const getDogImage = () => {
        let url = 'https://dog.ceo/api/breed/' + DogList.select + '/images/random';
          fetch(url)
          .then(response => {
            setDogList({
              imgURL: response.data.message
            });
            console.log(response.data.message)
          })
          .catch(err => {
            console.log('error fetching image');
          });
      };
    
    const  getBreed = () => {
        fetch('https://dog.ceo/api/breeds/list')
            .then(response => {
                setDogList({
                breed: DogList.breed.concat(response.data.message)
                });
            console.log (DogList);
          })
          .catch(err => {
            console.log('error fetching list');
          });
      }
    
    const  getRandomImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then(data => {
                let random = [{ url: data.message }];
                setDogImg(random);
                setDogList({ display: true });
            })
            .then((data) => console.log(data))
            .catch(err => {
                console.log('error fetching image');
            });
      };
            console.log(DogImg);
    
    const  handleSelect = (e) => {
        setDogList({
            select: e.target.value
        })
    }
    
    
    // componentDidMount() {
    //   this.getDogImage();
    // }
    
    const  App = () => {    
        return(
            <div>
            <p>Choose a dog from the drop down menu and click submit.</p>
            <select value={DogList.select} onChange={handleSelect}>
                {DogList.breed.map(e => 
                <option value={e}> {e} </option>
                )}
            </select>

            <button id='submit' disabled={!DogList.select} onClick={getDogImage}>submit</button>
            
            <p></p>
            <div id='img'>
                <img alt='dog' src={DogList.imgURL} />
            </div>

            <p></p>
            <p>Breed: {DogList.select}</p>
            <p> Or click the random button for a random dog.</p>
            <button onClick={getRandomImage}>random</button>
            </div>
        )
    }
return (
        <div>
            <Header />
            <DogsForm getRandomImage={getRandomImage}/>
            {DogList.display ? <DogsList DogImg={DogImg} /> : <div/> }

        </div>
)
}

export default DogsApp;
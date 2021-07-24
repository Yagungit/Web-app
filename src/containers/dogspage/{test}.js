const  App = () => {    
        return (
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
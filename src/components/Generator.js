import React from 'react'
import memesData from '../memesData'

export default function Generator() {
    
    const [memeImage, memeURL] = React.useState("");

    function getRandomImage(){
        let number = Math.floor(Math.random()*100);
        let imageURL = memesData.data.memes[number].url;

        memeURL(imageURL);
    }
    
    return (
        <main>
            <div className="form">
                <input className='formTextInput' type="text" placeholder='First text'/>
                <input className='formTextInput secondInput' type="text" placeholder='Second text'/><br />
                <button className='formButton' onClick={getRandomImage}>Get a new meme image</button>
            </div>
            <img src={memeImage} alt="meme image" className='memeImg' />
        </main>
    )
}

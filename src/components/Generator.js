import React from 'react'
import memesData from '../memesData.json'

export default function Generator() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getRandomImage(){
        let number = Math.floor(Math.random()*100);
        let imageURL = allMemeImages.data.memes[number].url;

        setMeme(prevMeme => {
            return {...prevMeme, randomImage: imageURL}
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    className='formTextInput' 
                    type="text" 
                    placeholder='First text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                    />
                <input 
                    className='formTextInput secondInput' 
                    type="text" 
                    placeholder='Second text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                    /><br />
                <button className='formButton' onClick={getRandomImage}>Get a new meme image</button>
            </div>
            <div className="imgWrapper">
                <h1 className='topText'>{meme.topText}</h1>
                <img src={meme.randomImage} alt="meme" className='memeImg' />
                <h1 className='bottomText'>{meme.bottomText}</h1>
            </div>
        </main>
    )
}

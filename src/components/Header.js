import React from 'react'
import troll from '../img/troll.png'

export default function Header() {
    return (
        <header>
            <div className='headerTitle'>
                <img src={troll} alt="troll face" />
                <h2>Meme Generator</h2>
            </div>
            <div className='headerDesc'>
                <p>React Project</p>
            </div>
        </header>
    )
}

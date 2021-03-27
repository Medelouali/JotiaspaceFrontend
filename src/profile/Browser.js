import React from 'react'
import Latest from './Latest';
import Slider from './Links/Slider';


function Browser({name}) {

    return (
        <div className="browser">
            <h3>{name}</h3>
            <p>I am the CEO of Facebook Inc</p>
            <hr/>
            <Latest/>
            <Slider/>
        </div>
    )
}

export default Browser

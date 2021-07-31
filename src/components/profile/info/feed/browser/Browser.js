import React from 'react'
import Latest from './latest/Latest';
import Slider from './slider/Slider';
import "./browser.css";

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

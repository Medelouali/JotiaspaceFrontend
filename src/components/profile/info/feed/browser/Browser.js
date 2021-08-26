import React from 'react'
import Latest from './latest/Latest';
import Slider from './slider/Slider';
import "./browser.css";

function Browser({name, description}) {

    return (
        <div className="browser">
            <h3>{name}</h3>
            <p>{description}</p>
            <hr/>
            <Latest/>
            <Slider/>
        </div>
    )
}
 Browser.defaultProps={
     description: "Add a description about what you do so people would know you better",
     name: ""
 }
export default Browser

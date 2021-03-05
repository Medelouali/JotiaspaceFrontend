import React from 'react';
import Slide from './Slide';
import "./links.css";

function Info({email, occupation, location}) {
    return (
        <div className="about-info">
            <Slide label="Email" info={email}/>
            <Slide label="Occupation" info={occupation}/>
            <Slide label="Location" info={location}/>
        </div>
    )
}

export default Info;

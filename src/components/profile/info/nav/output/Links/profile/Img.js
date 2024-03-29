import React from 'react';
import person from "../../../../../svg/animals/crow.svg";

function Img({name}) {
    return (
        <div className="outer-picture">
            <div className="picture">
                <img src={person} alt=""/>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default Img;

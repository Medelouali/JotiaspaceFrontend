import React from 'react'
import Friend from './Friend'
import image from "./svg/Bill.jpg";

function Network({name}) {
    return (
        <div className="network">
            <h6>{name}</h6>
            <Friend picture={image} name="Mark" jsx={"New York City"}/>
            <Friend picture={image} name="Mark" jsx={"New York City"}/>
            <Friend picture={image} name="Mark" jsx={"New York City"}/>
            <hr/>
        </div>
    )
}

export default Network

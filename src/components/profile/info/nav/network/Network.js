import React from 'react'
import Friend from './friend/Friend'
import image from "../../../svg/Bill.jpg";
import "./network.css";

function Network({name}) {
    return (
        <div className="network">
            <h5>{name}</h5>
            <Friend picture={image} name="Mark" jsx={"New York City"}/>
            <Friend picture={image} name="Mark" jsx={"New York City"}/>
            <Friend picture={image} name="Mark" jsx={"New York City"}/>
            <hr/>
        </div>
    )
}

export default Network

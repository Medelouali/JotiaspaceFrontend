import React from 'react'
import "./friends.css";
import fluffy from "../../svg/fluffy.jpg";
import Template from '../Template';

function Friends() {
    return (
        <div className="friends">
            <Template image={fluffy} name="Fluffy" control={"..."} details={<div>Hello Friends</div>}/>            
        </div>
    )
}

export default Friends;

import React from 'react';
import Friend from "../Friend";
import pic from "./svg/mark.webp";

function Friends() {
    return (
        <div className="friends-list">
            <Friend picture={pic} name={"Adam"} jsx="New York"/>
            <Friend picture={pic} name={"Adam"} jsx="New York"/>
            <Friend picture={pic} name={"Adam"} jsx="New York"/>
            <Friend picture={pic} name={"Adam"} jsx="New York"/>
            <Friend picture={pic} name={"Adam"} jsx="New York"/>
        </div>
    )
}

export default Friends;

import React from 'react';
import Friend from "../../network/friend/Friend";
import pic from "../../../../svg/Bill.jpg";

import "./friends.css";

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

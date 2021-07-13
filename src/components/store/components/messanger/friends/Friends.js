import React from 'react';
import "./friends.css";
import fluffy from "../../svg/fluffy.jpg";
import Notification from '../notification/Notification';

function Friends() {
    return (
        <div className="friends-list">
            <Notification image={fluffy} jsx={<h6>El Ouali</h6>}/>         
            <Notification image={fluffy} jsx={<h6>El Ouali</h6>}/>         
            <Notification image={fluffy} jsx={<h6>El Ouali</h6>}/>         
        </div>
    )
}

export default Friends;

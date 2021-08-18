import React from 'react';
import "./friends.css";
import fluffy from "../../svg/fluffy.jpg";
import Notification from '../notification/Notification';

function Friends() {
    return (
        <div className="friends-list">
            <Notification image={fluffy} jsx={<h4>El Ouali</h4>}/>         
            <Notification image={fluffy} jsx={<h4>El Ouali</h4>}/>         
            <Notification image={fluffy} jsx={<h4>El Ouali</h4>}/>         
        </div>
    )
}

export default Friends;

import React from 'react'
import Photos from './photos/Photos';
import Info from './info/Info';
import Friends from './friends/Friends';
import "./output.css";

import { useSelector } from "react-redux";

function Output({what}) {
    const user=useSelector(state=>state.updateUser);

    switch(what){
        case "info":
            return(
                <Info email={user.email} occupation={user.occupation} location={user.location}/>
            );
        case "photos":
            return(
                <Photos/>
            );
        case "friends":
            return(
                <Friends/>
            );
        default:
            return(
                <div className=""></div>
            );
    };
}

export default Output

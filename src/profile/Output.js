import React from 'react'
import Photos from './Links/Photos';
import "./Links/links.css";
import Info from './Links/Info';
import Friends from './Links/Friends';

import { useSelector } from "react-redux";

function Output({what}) {
    const user=useSelector(state=>state.updateUser);

    switch(what){
        case "info":
            return(
                <Info email={user.useremail} occupation={user.useroccupation} location={user.userlocation}/>
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

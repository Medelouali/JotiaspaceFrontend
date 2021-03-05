import React from 'react'
import Photos from './Links/Photos';
import "./Links/links.css";
import Info from './Links/Info';
import Friends from './Links/Friends';

function Output({what}) {
    switch(what){
        case "info":
            return(
                <Info email="JotiaSpace@gmail.com" occupation="Businessman" location="Morocco"/>
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

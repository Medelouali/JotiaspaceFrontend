import React from 'react'
import Nav from './nav/Nav';
import Feed from "./feed/Feed";
import "./info.css";

function Info() {
    return (
        <div className="center">
            <Nav/>
            <Feed/>
        </div>
    )
}

export default Info

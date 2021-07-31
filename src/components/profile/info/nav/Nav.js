import React from 'react';
import Network from './network/Network';
import Output from './output/Output';
import Picture from './picture/Picture';
import { useSelector } from "react-redux";
import "./nav.css";

function Nav() {
    const what=useSelector(state => state.profile);
    return (
        <div className="outer-nav">
            <div className="inner-nav">
                <Picture/>
                <hr/>
                <Output what={what}/>
                <hr/>
                <Network name="Dealers Network"/>
            </div>
        </div>
    )
}

export default Nav;

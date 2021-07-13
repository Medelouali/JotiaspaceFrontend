import React from 'react';
import Network from './Network';
import Output from './Output';
import Picture from './Picture';
import { useSelector } from "react-redux";

function Nav() {
    const what=useSelector(state => state.profile);
    return (
        <div className="outer-nav">
            <div className="nav">
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

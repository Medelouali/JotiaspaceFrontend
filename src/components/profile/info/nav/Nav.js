import React from 'react';
import Network from './network/Network';
import Output from './output/Output';
import Picture from './picture/Picture';
import { useSelector } from "react-redux";

import "./nav.css";
import useMedia from 'use-media';

function Nav() {
    const what=useSelector(state => state.profile);
    const isBig=useMedia({minWidth: "475px"});

    return (
        <div className={"outer-nav" + (isBig ? " fixIt": "")}>
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

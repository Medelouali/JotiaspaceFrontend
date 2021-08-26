import React from 'react';
import Browser from './browser/Browser';
import Private from './private/Private';
import { useSelector } from "react-redux";

import "./feed.css";

function Feed() {
    const name=useSelector(state=>state.updateUser).username;
    return (
        <div className="outer-feed">
            <div className="feed">
                <Browser name={ name }/>
                <Private/>
            </div>
        </div>
    )
}

export default Feed

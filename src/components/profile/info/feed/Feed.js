import React from 'react';
import Browser from './browser/Browser';
import Private from './private/Private';
import "./feed.css";

function Feed() {
    return (
        <div className="outer-feed">
            <div className="feed">
                <Browser name="Mark Zuckerberg"/>
                <Private/>
            </div>
        </div>
    )
}

export default Feed

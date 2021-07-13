import React from 'react';
import Browser from './Browser';
import Privacy from './Privacy';
function Feed() {
    return (
        <div className="outer-feed">
            <div className="feed">
                <Browser name="Mark Zuckerberg"/>
                <Privacy/>
            </div>
        </div>
    )
}

export default Feed

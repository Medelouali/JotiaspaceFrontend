import React from 'react';
import "./vidoes.css";

function Videos() {
    return (
        <div className="videos-style">
            <video autoPlay loop muted>
                <source src="./clips/walker.webm" type="video/webm"/>
            </video>
        </div>
    )
}

export default Videos;

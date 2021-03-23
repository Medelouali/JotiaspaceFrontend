import React from 'react';
import fluffy from "../svg/fluffy.jpg";
import "./scroller.css";

function ScrollerX({clips}){
    return(
        <div className="scroller-1">
            <div className="scroller-11">
                {clips.map((clip, index)=>(
                    <div key={`${index}`} className="item">{clip}</div>
                ))}
            </div>
        </div>
    );
}

ScrollerX.defaultProps={
    clips: [
        <img key={1} className="clip-item" src={fluffy} alt=""/>,
        <img key={2} className="clip-item" src={fluffy} alt=""/>,
        <img key={3} className="clip-item" src={fluffy} alt=""/>,
        <img key={4} className="clip-item" src={fluffy} alt=""/>,
        <img key={5} className="clip-item" src={fluffy} alt=""/>,
    ]
};

export default ScrollerX;
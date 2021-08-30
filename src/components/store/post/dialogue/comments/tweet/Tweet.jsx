import React from 'react';
import "./tweet.css";

export default function Tweet({ callback, picture, name, tweet, replies , hidden}) {
    if(hidden) return <></>;
    const cb=()=>{
        console.log("Called");
        callback();
    };
    return (
        <div  onClick={cb} className="tweeter">
            <div className="tweeter-picture"><img src={picture} alt="" /></div>
            <div className="tweeter-name">{name}</div>
            <div className="tweeter-text">{tweet}</div>
            <div className="tweeter-replies">Replies({replies})</div>
        </div>
    )
}

Tweet.defaultProps={
    picture: "https://media.istockphoto.com/photos/beautiful-young-woman-with-curly-hair-picture-id1148067797?k=20&m=1148067797&s=612x612&w=0&h=W5_KYkQ3DNizjZDBdYUOVp4Gn6h2DnlkbBpLnh8utI4=",
    callback: ()=>{},
    hidden: false
}
import React, { useState } from "react";
import Follow from "./Follow";
import fluffy from "../../svg/fluffy.jpg";

export default function FriendCard({image, name}){
    const [open, setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    };
    return(
        <>
            <div className="friend-card">
                <div className="friend-image-1">
                    <img className="friend-image-11" src={image} alt="Friend"/>
                </div>
                <h6>{name}</h6>
                <div className="friend-logo-1">
                    <svg onClick={handleOpen} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" className="friend-logo-11 svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="path" fill="white" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                </div>
            </div>
            <div className="friends-action">
                <Follow expaind={open}/>
            </div>
        </>
    );
}

FriendCard.defaultProps={
    image: {fluffy},
    name: "Flufyyy"
}





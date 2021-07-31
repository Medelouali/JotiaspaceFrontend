import React, { useState, useRef, useEffect } from 'react';
import Driver from '../../../output/Links/Driver';
import "./friendData.css";

function FriendData({out, content}){
    const [driver, setDriver] = useState("");
    const ref=useRef(null);

    const handleMessage=()=>{
        setDriver("message");
    };
    const handleProfile=()=>{
        setDriver("profile");
    };

    useEffect(() => {
        if(ref.current)ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [driver]);
    if(out && content){
        return (
            <div className="data">
                <div className="drivers">
                    <div onClick={handleMessage} className="message-dr">Message</div>
                    <div onClick={handleProfile} className="profile-dr">Profile</div>
                </div>
                <div ref={ref}><Driver go={driver}/></div>
            </div>
        );
    }else{
        return(
            <div className=""></div>
        );
    }
}

export default FriendData;

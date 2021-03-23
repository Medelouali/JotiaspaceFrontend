import React, { useState } from "react";
import { useSelector } from "react-redux";
import GoMessage from '../message/GoMessage';

export default function Follow({expaind}){
    const user = useSelector(state => state.usersData);
    const [go_m, setGo_m]=useState(false);
    const handleMessage=()=>{
        setGo_m(!go_m);
    }
    
    if(expaind){
        return(
            <div className="go-message-wrapper">
                <div className="follow">
                    <button onClick={handleMessage} className={`${go_m ? "clicked ": ""}message`}>Message</button>
                    <button className="clicked ">Profile</button>
                </div>
                <div className="go-message">
                    <GoMessage go_message={go_m} myUser={user} hisUser={user}/>
                </div>
            </div>
        )
    }else{
        return(
            <div className=""></div>
        )
    }
}

Follow.defaultProps={
    expaind: false
}


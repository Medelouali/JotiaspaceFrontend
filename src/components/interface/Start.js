import React from 'react'
import process from "./svg/process.svg";

function Start({start}) {
    if(start){
        return (
            <div className="posting">
                <img className="posting-icon" src={process} alt=""/>            
            </div>
        )
    }else{
        return(<></>);
    }
}

export default Start

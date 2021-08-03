import React from 'react';
import Receipts from "./receipts/Receipts";

import "./msg.css";

function Msg({flag, textMsg, timeStamp}) {
    if(flag==="Him")
        return(
            <div className="message-section">
                <div className="message-text him-border">
                    <p>{textMsg}</p>
                    <Receipts sent={true} recieved={true} viewed={true}/>
                </div>
                <div className="timeStamp">{timeStamp}</div>
            </div>
        );
    return (
        <div className="message-section">
            <div className="timeStamp">{timeStamp}</div>
            <div className="message-text me-border">
                <p>{textMsg}</p>
                <Receipts sent={true} recieved={true} viewed={true}/>
            </div>
        </div>
    )
}

export default Msg;
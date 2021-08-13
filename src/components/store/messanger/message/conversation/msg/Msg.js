import React from 'react';
import Receipts from "./receipts/Receipts";

import "./msg.css";

function Msg({flag, textMsg, timeStamp, receipts}) {
    if(flag==="Him")
        return(
            <div className="message-section">
                <div className="message-text him-border">
                    <p>{textMsg}</p>
                    <div className="timeStamp">{timeStamp}</div>
                    <div className="receipts-box">
                        <Receipts sent={receipts.sent} received={receipts.received} viewed={receipts.viewed}/>
                    </div>
                </div>
            </div>
        );
    return (
        <div className="message-section">
            <div className="message-text me-border">
                <p>{textMsg}</p>
                <div className="timeStamp">{timeStamp}</div>
                <div className="receipts-box">
                    <Receipts sent={receipts.sent} recieved={receipts.recieved} viewed={receipts.viewed}/>
                </div>
            </div>
        </div>
    )
}

export default Msg;
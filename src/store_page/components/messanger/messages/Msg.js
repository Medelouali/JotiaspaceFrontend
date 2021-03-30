import React from 'react';

function Msg({flag, textMsg, timeStamp}) {
    if(flag==="Me")
        return(
            <div className="messsage-section">
                <div className="message-text him-border">{textMsg}</div>
                <div className="timeStamp">{timeStamp}</div>
            </div>
        );
    return (
        <div className="message-section">
            <div className="timeStamp">{timeStamp}</div>
            <div className="message-text me-border">{textMsg}</div>
        </div>
    )
}

export default Msg;
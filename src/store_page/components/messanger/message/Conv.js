import React, { useState } from "react";
import Reader from "./Reader";
import Unread from "./Unread";
import fluffy from "../../svg/fluffy.jpg";

export default function Conv({sender}){
    const [show, setShow]=useState(false);
    const handleShow=()=>{
        setShow(!show);
    };

    return(
        <div className="hold-chat">
            <div onClick={handleShow} className="chat-holder">
                <img src={sender.sender_image} alt="Sender"/>
                <h4>{sender.sender_name}</h4>
                <div className="last-message">
                    <p>
                        {sender.records ? (sender.records[sender.records.length-1].hasOwnProperty("Me") ?
                        sender.records[sender.records.length-1]["Me"] : 
                        sender.records[sender.records.length-1]["Him"]): ""}
                    </p>
                </div>
                <Unread unread_messages={1}/>
            </div>
            <Reader conversation={sender.records} show={show}/>
            <hr/>
        </div>
    )
}

Conv.defaultProps={
    sender: {sender_name: "Manar", sender_image: fluffy, records:[{"Me": "Hi"}, {"Him": "Hello my friend"}, {"Me": "God Damn!"}]}
}




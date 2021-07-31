import React, { useState } from 'react';
import { useMedia } from "use-media";
import "./messages/message.css";
import "./messanger.css";

function Template({image, name, control, details}){
    const [show, setShow]=useState(false);
    const smallScreen=useMedia({maxWidth: "833px"});

    const handleDetails=()=>{
        setShow(!show);
    };
    return (
        <div className={"template"+ ( !smallScreen ? " big-size": "")}>
            <div className="sup">
                <div onClick={handleDetails} className="chat-image">
                    <img src={image} alt=""/>
                </div>
                <h6>{name}</h6>
                <div className="control">
                    {control}
                </div>
            </div>
            <div className="details-section">
                { show ? details : ""}
            </div>
        </div>
    )
}

export default Template;
import React, { useState, useRef } from 'react';
import Controller from "./Controller";
import Conversation from "./Conversation";

import messages from '../../../../redux/actions/messages';
import { useMedia } from "use-media";
import { useDispatch } from "react-redux";

function Chat({chat, index}) {
    const smallScreen=useMedia({maxWidth: "833px"});
    const [showMe, setShowMe]=useState(false);
    const divRef=useRef(null);

    const dispatch=useDispatch();
    const handleChat=()=>{
        dispatch(messages(chat.chats));
        setShowMe(!showMe);
        if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    };

    return (
        <div className="">
            <div className="chat">
                <div onClick={handleChat} className="chat-image">
                    <img src={chat.chater_image} alt=""/>
                </div>
                <h4 onClick={handleChat} >{chat.chater_name}</h4>
                <Controller index={index}/>
                <div ref={divRef} className=""></div>
                {smallScreen && showMe ?
                    <div className="conversation">
                        <Conversation chatText={chat.chats}/>
                    </div>:<></>
                }

            </div>
            
        </div>
    )
}

export default Chat

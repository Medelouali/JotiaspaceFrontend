import React, { useState } from 'react';
import Controller from "./Controller";
import Conversation from "./Conversation";

import messages from '../../../../redux/actions/messages';
import { useMedia } from "use-media";
import { useDispatch } from "react-redux";

function Chat({chat, index}) {
    const smallScreen=useMedia({maxWidth: "833px"});
    const [showMe, setShowMe]=useState(false);

    const dispatch=useDispatch();
    const handleChat=()=>{
        dispatch(messages(chat.chats));
        setShowMe(!showMe);
    };

    

    return (
        <div className="">
            <div className={"chat" + (smallScreen ? " inner-mobile": "")}>
                <div onClick={handleChat} className="chat-image">
                    <img src={chat.chater_image} alt=""/>
                </div>
                <h4 onClick={handleChat} >{chat.chater_name}</h4>
                <Controller index={index}/>
                {smallScreen && showMe ? 
                (<div className="conversation">
                    <Conversation chatText={chat.chats} ux={smallScreen}/>
                </div>): <></>
            }
            </div>
            
        </div>
    )
}

export default Chat

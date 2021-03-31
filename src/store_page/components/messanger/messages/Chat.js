import React from 'react';
import Controller from "./Controller";
import messages from '../../../../redux/actions/messages';
import zoomMessage from "../../../../redux/actions/intoView/zoomMessage";

import { useDispatch } from "react-redux";

function Chat({chat, index}) {
    const dispatch=useDispatch();
    const handleChat=()=>{
        dispatch(messages(chat.chats));
        dispatch(zoomMessage(false));
        //console.log(chat.chats[0]);
    };
    return (
        <div className="chat">
            <div onClick={handleChat} className="chat-image">
                <img src={chat.chater_image} alt=""/>
            </div>
            <h4 onClick={handleChat} >{chat.chater_name}</h4>
            <Controller index={index}/>
        </div>
    )
}

export default Chat

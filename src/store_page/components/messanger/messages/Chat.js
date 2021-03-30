import React from 'react';
import Controller from "./Controller";

function Chat({chat, index}) {
    return (
        <div className="chat">
            <div className="chat-image">
                <img src={chat.chater_image} alt=""/>
            </div>
            <h4>{chat.chater_name}</h4>
            <Controller index={index}/>
        </div>
    )
}

export default Chat

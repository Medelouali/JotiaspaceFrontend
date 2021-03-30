import React from 'react'
import Chats from './Chats';
import Conversation from './Conversation';
import { useSelector } from "react-redux";

import "./message.css";

function Message() {
    const messages=useSelector(state=>state.deleteMessage);
    return (
        <div className="messages">
            <div className="chats">
                <Chats chats_list={messages}/>
            </div>
            <div className="conversation">
                <Conversation/>
            </div>
        </div>
    )
}

export default Message;

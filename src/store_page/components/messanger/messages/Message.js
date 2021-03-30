import React from 'react'
import Chats from './Chats';
import Conversation from './Conversation';

import "./message.css";

function Message() {    
    return (
        <div className="messages">
            <div className="chats">
                <Chats/>
            </div>
            <div className="conversation">
                <Conversation/>
            </div>
        </div>
    )
}

export default Message;

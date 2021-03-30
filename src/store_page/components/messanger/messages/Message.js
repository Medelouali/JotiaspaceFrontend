import React, { useRef, useEffect } from 'react'
import Chats from './Chats';
import Conversation from './Conversation';
import { useSelector } from "react-redux";

import "./message.css";

function Message() {
    const messages=useSelector(state=>state.deleteMessage);
    const chat=useSelector(state=>state.chat);
    const convRef=useRef(null);

    useEffect(() => {
        if(convRef.current)
            convRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, [chat]);

    return (
        <div className="messages">
            <div className="chats">
                <Chats chats_list={messages}/>
            </div>
            <div ref={convRef} className="conversation">
                <Conversation chatText={chat}/>
            </div>
        </div>
    )
}

export default Message;

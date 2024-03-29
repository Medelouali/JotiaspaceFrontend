import React, { useRef, useEffect } from 'react'
import Chats from './chats/Chats';
import Conversation from './conversation/Conversation';
import { useSelector } from "react-redux";
import { useMedia } from "use-media";

import "./message.css";

function Message() {
    const index=useSelector(state=>state.chatIndexer);
    const messages=useSelector(state=>state.deleteMessage);
    const user=useSelector(state=>state.sendMessage);    

    const convRef=useRef(null);
    const smallScreen=useMedia({maxWidth: "833px"});

    useEffect(() => {
        if(convRef.current)
            convRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, [index]);

    if(messages.length===0) return <div className="no-messages"><i>No Messages Yet</i></div>;
    return (
        <div className="messages">
            <div className="chats">
                <Chats chats_list={messages}/>
            </div>
            {!smallScreen && (
                <div ref={convRef} className="conversation">
                    <Conversation chatText={ user.messages[index].chats } ux={smallScreen}/>
                </div>
            )}
        </div>
    )
}

export default Message;

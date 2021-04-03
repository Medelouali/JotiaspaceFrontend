import React, { useRef, useEffect } from 'react'
import Chats from './Chats';
import Conversation from './Conversation';
import { useSelector } from "react-redux";
import { useMedia } from "use-media";
import "./message.css";

function Message() {
    
    const messages=useSelector(state=>state.deleteMessage);
    const user=useSelector(state=>state.sendMessage);
    const index=useSelector(state=>state.chatIndexer);

    console.log({user});
    const convRef=useRef(null);
    const smallScreen=useMedia({maxWidth: "833px"});

    useEffect(() => {
        if(convRef.current)
            convRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, [index]);

    return (
        <div className="messages">
            <div className="chats">
                <Chats chats_list={messages}/>
            </div>
            {
            !smallScreen ? (
                <div ref={convRef} className="conversation">
                    <Conversation chatText={user.messages[index].chats} ux={smallScreen} index={index}/>
                </div>
            ): <></>
            }
        </div>
    )
}

export default Message;

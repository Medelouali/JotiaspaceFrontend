import React, { useState, useRef, useEffect } from 'react';
import Controller from "./Controller";
import Conversation from "./Conversation";

import { useSelector } from "react-redux";

import messages from '../../../../redux/actions/messages';
import chatIndexer from '../../../../redux/actions/chatIndexer';
import { useMedia } from "use-media";
import { useDispatch } from "react-redux";

function Chat({chat, index}) {
    const smallScreen=useMedia({maxWidth: "833px"});
    const [showMe, setShowMe]=useState(false);
    const divRef=useRef(null);
    const currentChat=useSelector(state=>state.sendMessage).messages[index].chats;
    const dispatch=useDispatch();
    
    const handleChat=()=>{
        dispatch(messages(chat.chats));
        dispatch(chatIndexer(index));
        setShowMe(!showMe);
    };

    useEffect(() => {
        if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [currentChat]);

    return (
        <div className="">
            <div className="chat">
                <div onClick={handleChat} className="chat-image">
                    <img src={chat.chater_image} alt=""/>
                </div>
                <h4 onClick={handleChat} >{chat.chater_name}</h4>
                <Controller index={index}/>
                {smallScreen && showMe && (
                    <div className="conversation">
                        <Conversation chatText={chat.chats}/>
                    </div>
                )}
                <div ref={divRef} className=""></div>
            </div>
        </div>
    )
}

export default Chat;

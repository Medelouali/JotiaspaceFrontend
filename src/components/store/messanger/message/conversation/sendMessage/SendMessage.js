import React, { useState } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

import { useDispatch, useSelector } from "react-redux";
import sendMessage from '../../../../../../redux/actions/sendMessage';
import chatIndexer from '../../../../../../redux/actions/chatIndexer';

import "./sendMessage.css";

function SendMessage({index}) {
    const [message, setMessage]=useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.sendMessage);

    const date=new Date();
    const now=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    const handleMessage=(e)=>{
        e.preventDefault();
        //send message logic goes here...
        user.messages[index].chats.push({"Me": message, timeStamp: now});
        dispatch(chatIndexer(-1));
        dispatch(chatIndexer(index));
        dispatch(sendMessage(user));
        setMessage("");
    }

    const loadMessage=(e)=>{
        setMessage(e.target.value);
    }

    return (
        <form onSubmit={handleMessage} className="message-sending" action="post">
            <div className="audio"><MicIcon/></div>
            <div className="field"><input value={message} onChange={loadMessage} type="text" placeholder="message..."/></div>
            <div onClick={handleMessage} className="sending">
                <SendIcon/>                
            </div>
            <button type="submit"></button>
        </form>
    )
}

export default SendMessage

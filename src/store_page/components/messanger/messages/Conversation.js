import React from 'react';
import { useSelector } from "react-redux";
import Msg from "./Msg";
import SendMessage from './SendMessage';
import ScrollToBottom from 'react-scroll-to-bottom';

function Conversation({chatText}) {
    const convIndex=useSelector(state=>state.chatIndexer);

    return (
        <ScrollToBottom className="inner-conversation">
            {
                chatText.map((item, index)=>{
                    const sender=!item["Him"] ? "Me": "Him";
                    return <Msg flag={sender} 
                        textMsg={item[sender]} 
                        timeStamp={item.timeStamp} key={`#${index}`}/>;
                })
            }
            <div className="sender">
                {chatText.length>0 && (<SendMessage index={convIndex}/>)}
            </div>
        </ScrollToBottom>
    )
}

Conversation.defaultProps={
    chatText: []    
};

export default Conversation;

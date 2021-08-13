import React from 'react';
import { useSelector } from "react-redux";
import Msg from "./msg/Msg";
import SendMessage from './sendMessage/SendMessage';
import ScrollToBottom from 'react-scroll-to-bottom';



import "./conversation.css";

function Conversation({chatText}) {
    const convIndex=useSelector(state=>state.chatIndexer);

    // useEffect(() => {
    //     if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "end"});
    // }, [chatText], []);
    return (
        <ScrollToBottom className="inner-conversation">
            {
                chatText.map((item, index)=>{
                    const sender=!item["Him"] ? "Me": "Him";
                    return <Msg flag={sender} 
                        textMsg={item[sender]} 
                        timeStamp={item.timeStamp} receipts={item.receipts} key={`#${index}`}/>;
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

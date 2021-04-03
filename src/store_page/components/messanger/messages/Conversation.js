import React from 'react'
import Msg from "./Msg";
import SendMessage from './SendMessage';


function Conversation({chatText, index}) {
    return (
        <div className="inner-conversation">
            {chatText.map((item, index)=>{
                const flag=item["Him"]===undefined ? "Me": "Him";
                return <Msg flag={flag} textMsg={item[flag]} timeStamp={item.timeStamp} key={`#${index}`}/>
            })}
            <div className="sender">
                {chatText.length ? <SendMessage index={index}/>: <></>}
            </div>
        </div>
    )
}

Conversation.defaultProps={
    chatText: [],
    ux: false,
    index: -1
        
};

export default Conversation;

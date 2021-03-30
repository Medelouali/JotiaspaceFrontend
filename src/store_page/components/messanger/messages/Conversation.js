import React from 'react'
import Msg from "./Msg";

function Conversation({chatText}) {
    return (
        <div className="inner-conversation">
            {chatText.map((item, index)=>{
                const flag=item["Him"]===undefined ? "Me": "Him";
                return <Msg flag={flag} textMsg={item[flag]} key={`#${index}`}/>
            })}
        </div>
    )
}

Conversation.defaultProps={
    chatText: []
        
};

export default Conversation;

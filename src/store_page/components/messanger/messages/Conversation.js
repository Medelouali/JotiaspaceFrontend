import React from 'react'

function Conversation({chats}) {
    return (
        <div className="inner-conversation">
            Inner Conv...
        </div>
    )
}

Conversation.defaultProps={
    chats: [
        {
            sender_id: 1,
            msg: "Hello",
            timeStamp: Date.now()
        },
        {
            sender_id: 2,
            msg: "Hey how are u?",
            timeStamp: Date.now()
        },
        {
            sender_id: 1,
            msg: "I am good wbu?",
            timeStamp: Date.now()
        },
        {
            sender_id: 2,
            msg: "Just fine and dandy",
            timeStamp: Date.now()
        }
    ]
};

export default Conversation;

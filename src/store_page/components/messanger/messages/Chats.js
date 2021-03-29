import React from 'react'
//import Links from './Links'

function Chats({chats_list}) {
    return (
        <div className="inner-chats">
            Inner Chats
        </div>
    );
}

Chats.defaultProps={
    chats_list: []
};

export default Chats

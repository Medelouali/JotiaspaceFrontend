import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import girl from "../../../svg/girlSmiling.jpg";
import Chat from './chat/Chat';

import "./chats.css";

function Chats({chats_list}) {
    const chatsRef=useRef(null);
    const viewIt=useSelector(state=>state.zoomMessage);

    if(viewIt && chatsRef.current)
        chatsRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    if(!chats_list)
        return <div className="inner-chats">No Conversations</div>;
    return (
        <div ref={chatsRef} className="inner-chats">
            {chats_list.map(((item, index)=><Chat chat={item} key={`#${index}`} index={index}/>))}
        </div>
    );
}

Chats.defaultProps={
    chats_list: [
        {chater_name: "Lissa", chater_image: girl}
    ]
};

export default Chats

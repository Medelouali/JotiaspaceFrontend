import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import girl from "../../svg/girlSmiling.jpg";
import Chat from './Chat';
// import { useMedia } from "use-media";

//import Links from './Links'

function Chats({chats_list}) {
    const chatsRef=useRef(null);
    const viewIt=useSelector(state=>state.zoomMessage);
    // const smallScreen=useMedia({maxWidth: "833px"});

    if(viewIt && chatsRef.current)
        chatsRef.current.scrollIntoView({behavior: "smooth", block: "start"});

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

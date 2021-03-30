import React from 'react';
import girl from "../../svg/girlSmiling.jpg";
import Chat from './Chat';

//import Links from './Links'

function Chats({chats_list}) {
    return (
        <div className="inner-chats">
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

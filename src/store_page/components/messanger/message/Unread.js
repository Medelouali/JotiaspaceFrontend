import React from "react";


export default function Unread({unread_messages}){
    if(unread_messages)
        return (<div className="unread"><h3>{unread_messages}</h3></div>);
    else
        return <div className=""></div>
}

Unread.defaultProps={
    unread_messages: 0
}

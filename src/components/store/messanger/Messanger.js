import React from "react";
import Friends from "./friends/Friends";
import AddFriends from "./addFriends/AddFriends";
import Notifications from "./notification/Notifications";
import Message from './message/Message';

import "./messanger.css";
import Wrapper from "./Wrapper";

function Messanger({app}){
    switch(app){
        case 0:
            return(<Wrapper jsx={<Friends/>}/>);
        case 1:
            return(<Wrapper jsx={<AddFriends/>}/>);
        case 2:
            return(<Wrapper jsx={<Notifications/>}/>);
        case 3:
            return(<Wrapper jsx={<Message/>}/>);
        default:
            return(
                <></>
            );
    };
}

Messanger.defaultProps={
    app: -1
}

export default Messanger;
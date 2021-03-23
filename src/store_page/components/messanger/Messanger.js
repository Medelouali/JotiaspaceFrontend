import React from "react";
import Friends from "./friends/Friends";
import AddFriends from "./addFriends/AddFriends";
import Notifications from "./notification/Notifications";
import Messages from "./message/Messages";
import Invitation from "./invitation/Invitation";

export default function Messanger({app}){
    switch(app){
        case 0:
            return(<Friends/>);
        case 1:
            return(<AddFriends/>);
        case 2:
            return(<Notifications/>);
        case 3:
            return(<Messages/>);
        case 4:
            return(<Invitation/>);
        default:
            return(<></>);
    };
}

Messanger.defaultProps={
    app: -1
}


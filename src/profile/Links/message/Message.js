import React from 'react';
import "./message.css";
import { Messages } from "../../../store_page/components/Messanger";
function Message(){
    return(
        <div className="message">
            <Messages/>
        </div>
    );
};

export default Message;

import React from "react";
import Reader from "./Reader";

export default function GoMessage({go_message, myUser, hisUser}){
    if(go_message){
        //<Reader conversation={sender.records} show={show}/>
        if(myUser.friends_ids.some(item=>item===hisUser.id)){
            return(
                <div className="go-message">
                    <Reader conversation={myUser.messages.filter(item=>item.sender_id===hisUser.id ||
                     item.receiver_id===hisUser.id)[0]?.chats} show={true}/>
                </div>
            )
        }else{
            return(
                <div className="go-message">
                    <Reader conversation={[{"Him": "testinggg"}]} show={true}/>
                </div>
            );
        }
    }else
        return(
            <div className=""></div>
        );
}


GoMessage.defaultProps={
    go_message: false,
    myUser: {},
    hisUser: {}
}

import React from "react";

export default function Reply({sender_flag, talk}){
    if(sender_flag==="Me"){
        return(
            <div className="myMessage">
                <p>{talk}</p>
            </div>
        );
    }else if(sender_flag==="Him"){
        return(
            <div className="hisMessage">
                <p>{talk}</p>
            </div>
        );
    }else{
        return(
            <div className=""></div>
        )
    }
}

Reply.defaultProps={
    sender_flag: "",
    talk: ""
}


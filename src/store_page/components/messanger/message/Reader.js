import React from "react";
import ScrollerY from "../../scrollers/ScrollerY";
import fluffy from '../../svg/fluffy.jpg';


export default function Reader({conversation, show}){
    if(show){
        return(
            <ScrollerY list={conversation}/>
        )
    }else
        return(
            <div className=""></div>
        );
}

Reader.defaultProps={
    conversation: {
        sender_name: "Imad", 
        sender_image: fluffy, 
        records:[{"Me": "Hi"}, {"Him": "Hello my friend"}, {"Me": "Miss U!"}]
    },
    show: false
}

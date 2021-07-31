import React from "react";
import fluffy from "../../svg/fluffy.jpg";
import love from "../../svg/react/heart.svg";
import Notification from "./Notification";


export default function Notifications({list}){
    return(
        <div className="notifications">
            {list.map(item=><Notification image={item.image} jsx={item.description}/>)}
        </div>
    )
}

Notifications.defaultProps={
    list: [
        {image: fluffy, description: "Fluffy loved your post 2mins ago", logo: love},
        {image: fluffy, description: "Fluffy liked your post 7mins ago", logo: love},
        {image: fluffy, description: "Fluffy hits lools on your post 16mins ago", logo: love},
        {image: fluffy, description: "Fluffy commented on your post just now", logo: love}
    ]
}


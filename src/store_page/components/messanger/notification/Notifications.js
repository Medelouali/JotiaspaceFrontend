import React from "react";
import fluffy from "../../svg/fluffy.jpg";
import love from "../../svg/react/heart.svg";


export default function Notifications({list}){
    if(!list)
        return(
            <div className="">No notifications were found...</div>
        );
    else{
        return(
            <div className="">
                {list.map((reacter, index)=>(
                   <div key={`${reacter.description.slice(0,4)}#${index}`} className="reaction-post">
                        <img className="re-image" src={reacter.image} alt=""/>
                        <p>{reacter.description}</p>
                        <img className="re-logo" src={reacter.logo} alt=""/>
                   </div> 
                ))}
            </div>
        );
    };
}

Notifications.defaultProps={
    list: [
        {image: fluffy, description: "Fluffy loved your post 2mins ago", logo: love},
        {image: fluffy, description: "Fluffy liked your post 7mins ago", logo: love},
        {image: fluffy, description: "Fluffy hits lools on your post 16mins ago", logo: love},
        {image: fluffy, description: "Fluffy commented on your post just now", logo: love}
    ]
}


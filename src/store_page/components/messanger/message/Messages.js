import React from "react";
import Conv from "./Conv";
import fluffy from "../../svg/fluffy.jpg";
import "./message.css";

export default function Messages({chats}){
    return(
        <div className="messages-core">
            {chats.map((sender, index)=>(
                <div key={`${sender.sender_name}#${index}`} className="chat-wrapper">
                    <Conv sender={sender}/>
                </div>
            ))}
        </div>
    );
}

Messages.defaultProps={
    chats:[
        {sender_name: "Imad", sender_image: fluffy, records:[
            {"Me": "Hi There how are u today?!"}, 
            {"Him": "Hello my friend I am good u?"},
            {"Me": "Miss U! I ve been alone for so long now..."},
            {"Me": "Hi There how are u today?!"}, 
            {"Him": "Hello my friend I am good u?"},
            {"Me": "Miss U! I ve been alone for so long nowww..."},
            {"Me": "Hi There how are u today?!"}, 
            {"Him": "Hello my friend I am good u?"},
            {"Me": "Miss U! I ve been alone for so long now..."},
            {"Me": "Hi There how are u today?!"}, 
            {"Him": "Hello my friend I am good u?"},
            {"Me": "Miss U! I ve been alone for so long now..."},
            {"Me": "Hi There how are u today?!"}, 
            {"Him": "Hello my friend I am good u?"},
            {"Me": "Miss U! I ve been alone for so long nowww..."},
            {"Me": "Hi There how are u today?!"}, 
            {"Him": "Hello my friend I am good u?"},
            {"Me": "Miss U! I ve been alone for so long now..."}
        ]}/*,
        {sender_name: "Fadwa", sender_image: fluffy, records:[{"Me": "Holla"}, {"Him": "Heyy"}, {"Me": "How's life? u know I ve been asleep for three hours"}]},
        {sender_name: "Ilham", sender_image: fluffy, records:[{"Me": "Here is a french Bonjour"}, {"Him": "Hello my friend"}, {"Me": "Are U good?"}]},
        {sender_name: "Ahlam", sender_image: fluffy, records:[{"Me": "Hi"}, {"Him": "Heyyy"}, {"Me": "God Damn! I did that for as long as I can but u know people change"}]}
    */]
}


import lissa from "../svg/girlSmiling.jpg";
import fluffy from "../svg/fluffy.jpg";

const now=new Date();
const time=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

const user={
    _id: 0,
    username: "El Ouali",
    bio: "",
    email: "",
    password: "",
    image: "",
    posts:[
        {
            poster_name: "Alex",
            urls:[""],
            description: ``,
            comments:[
                {
                    commenter_id: 0,
                    comment: ""
                }
            ],
            loves: 0,
            likes: 0,
            dislikes: 0,
            lools: 0
        },
        {
            poster_name: "Jihane",
            urls:[""],
            description: ``,
            coments:[
                {
                    commenter_id: 0,
                    comment:``
                }
            ],
            loves: 0,
            likes: 0,
            dislikes: 0,
            lools: 0
        }
    ],
    friends_ids:[2, 5, 7],
    online: false,
    current_chatters: [2, 5],
    messages:[
        {
            sender_id: 1,
            receiver_id: 2,
            chater_name: "Lissa",
            chater_image: lissa, 
            chats:[
                {"Me": "Salam", timeStamp: time},
                {"Him": "Heyy I was waiting for you....", timeStamp: time},
                {"Me": "really I was little bit busy theses days u know", timeStamp: time},
                {"Him": "So now that u are back I have a project for u!?", timeStamp: time},
                {"Me": "Alright so tell me about it? Hope it's as the last one", timeStamp: time},
                {"Him": "btw u did a great job last time, that was amazing what u did...", timeStamp: time}
            ]
        },
        {
            sender_id: 1,
            receiver_id: 5, 
            chater_name: "Fluffy",
            chater_image: fluffy, 
            chats:[
                {"Me": "Hello", timeStamp: time},
                {"Him": "Heyy I was waiting for you....", timeStamp: time},
                {"Me": "really I was little bit busy theses days u know", timeStamp: time},
                {"Him": "So now that u are back I have a project for u!?", timeStamp: time},
                {"Me": "Alright so tell me about it? Hope it's as the last one", timeStamp: time},
                {"Him": "btw u did a great job last time, that was amazing what u did...", timeStamp: time}
            ]
        },
        {
            sender_id: 1,
            receiver_id: 3,
            chater_name: "Lissa",
            chater_image: lissa, 
            chats:[
                {"Me": "bonjour", timeStamp: time},
                {"Him": "Heyy I was waiting for you....", timeStamp: time},
                {"Me": "really I was little bit busy theses days u know", timeStamp: time},
                {"Him": "So now that u are back I have a project for u!?", timeStamp: time},
                {"Me": "Alright so tell me about it? Hope it's as the last one", timeStamp: time},
                {"Him": "btw u did a great job last time, that was amazing what u did...", timeStamp: time}
            ]
        },
        {
            sender_id: 23,
            receiver_id: 1,
            chater_name: "Lissa",
            chater_image: lissa, 
            chats:[
                {"Me": "Salut", timeStamp: time},
                {"Him": "Heyy I was waiting for you....", timeStamp: time},
                {"Me": "really I was little bit busy theses days u know", timeStamp: time},
                {"Him": "So now that u are back I have a project for u!?", timeStamp: time},
                {"Me": "Alright so tell me about it? Hope it's as the last one", timeStamp: time},
                {"Him": "btw u did a great job last time, that was amazing what u did...", timeStamp: time}
            ]
        },
        {
            sender_id: 1,
            receiver_id: 2903,
            chater_name: "Lissa",
            chater_image: lissa, 
            chats:[
                {"Me": "Hey", timeStamp: time},
                {"Him": "Heyy I was waiting for you....", timeStamp: time},
                {"Me": "really I was little bit busy theses days u know", timeStamp: time},
                {"Him": "So now that u are back I have a project for u!?", timeStamp: time},
                {"Me": "Alright so tell me about it? Hope it's as the last one", timeStamp: time},
                {"Him": "btw u did a great job last time, that was amazing what u did...", timeStamp: time}
            ]
        },
        {
            sender_id: 1211,
            receiver_id: 1,
            chater_name: "Lissa",
            chater_image: lissa, 
            chats:[
                {"Me": "Holla", timeStamp: time},
                {"Him": "Heyy I was waiting for you....", timeStamp: time},
                {"Me": "really I was little bit busy theses days u know", timeStamp: time},
                {"Him": "So now that u are back I have a project for u!?", timeStamp: time},
                {"Me": "Alright so tell me about it? Hope it's as the last one", timeStamp: time},
                {"Him": "btw u did a great job last time, that was amazing what u did...", timeStamp: time}
            ]
        },
    ],
    unread: 0,
    not: 0,
    fri: 0,
    mes: 0,
    inv: 0
}

export default user;
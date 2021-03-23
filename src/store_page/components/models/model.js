

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
            chats:[
                {"Me": "Heyy"},
                {"Him": "Heyy I was waiting for you...."}
            ]
        },
        {
            sender_id: 1,
            receiver_id: 5, 
            chats:[
                {"Me": "Hello"},
                {"Him": "Heyy I was waiting for you...."}
            ]
        }
    ],
    unread: 0,
    not: 0,
    fri: 0,
    mes: 0,
    inv: 0
    //We'll add fields as we need to.
}

export default user;

//Some database manipulations:
const users=[
    {
        uid: 1,
        username: "El Ouali",
        bio: "No Time to die",
        email: "MOhamemdkj@gmail.com",
        hash: "a03939939084",
        image: "https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg",
        posts:[
            {
                poster_name: "El Ouali",
                urls:["https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg"],
                description: `This was a present but know we afre lokking for selling this and ...`,
                coments:[
                    {
                        commenter_id: 1,
                        comment: "Really awesome hoppping we could deal with each other..."
                    }
                ],
                loves: 0,
                likes: 0,
                dislikes: 0,
                lools: 0
            },
            {
                poster_name: "El Ouali",
                urls:["https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg"],
                description: `hdihngjfnjh`,
                coments:[
                    {
                        commenter_id: 1,
                        comment:`jgkjkfiggjjkfhjg`
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
                    {"Me": "Hello"},
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
];

function borders(id){
    return id>0 && id<=users.length;
}

function addUser(user){
    user.push(user);
    return user;
}

function setOnline(id, flag){
    if(borders(id)){
        users[id].online=flag;
    }
}

function deleteUser(id){
    if(borders(id)){
        users.splice(id, 1);
    }
}

function deleteMessages(user_id, message_id){
    if(borders(user_id)){
        if(message_id>0 && message_id<=users[user_id].messages.length){
            users[user_id].messages[message_id-1].chats=[];
        }
    }
}

function send_message(message, from_id, to_id){
    if(!borders(from_id) || !borders(to_id)) return;
    const frame={
        from_chat_id: (users[from_id].messages.filter(mess=>mess.receiver_id===to_id || mess.sender_id===to_id) ?
            users[from_id].messages.indexOf(users[from_id].messages.filter(mess=>mess.receiver_id===to_id 
                || mess.sender_id===to_id)) + 1: -1),
        to_chat_id: (users[to_id].messages.filter(mess=>mess.receiver_id===from_id || mess.sender_id===from_id) ?
        users[to_id].messages.indexOf(users[to_id].messages.filter(mess=>mess.receiver_id===from_id 
            || mess.sender_id===from_id)) + 1: -1)
    };
    if(frame.from_chat_id!==-1 && frame.to_chat_id!==-1){
        users[from_id].messages[from_chat_id].chats.push({"Me":message});       
        users[to_id].messages[to_chat_id].chats.push({"Him":message});
        users[to_id].unread+=1;
        return users[from_id];       
    }
    return null;
}


//Server-Client Communication:
const app=require("express")();
const http=require("http").createServer(app);
const io=require("socket.io")(http);
const PORT=12000 || process.env.PORT;

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket)=>{
    console.log("We got a connection...")
    socket.on("sendMessage", (message_data)=>{
        const updated_user=send_message(message_data.message, message_data.from_id, message_data.to_id);
        socket.emit("updatedUser", updated_user);
    });
    socket.on("getUser", (index)=>{
        if(borders(index)){
            socket.emit("newUser", users[index-1]);
        }
    })
})

http.listen(PORT, ()=>{
    console.log(`Server is up running on port ${PORT}...`);
})

import React, {useState} from "react";
import fluffy from "./svg/fluffy.jpg";
//import three_dots from "./svg/three-dots.svg";
import love from "./svg/react/heart.svg";
import { ScrollerY } from "./Scroller";
import { useSelector } from "react-redux";

export function Messanger({app}){
    switch(app){
        case 0:
            return(<Friends/>);
        case 1:
            return(<AddFriends/>);
        case 2:
            return(<Notifications/>);
        case 3:
            return(<Messages/>);
        default:
            return(<></>);
    };
}

Messanger.defaultProps={
    app: -1
}

export function Friends({list}){

    return(
        <div className="friends-list">
            <div className="looking">
                <form id="friends-list" action="#">
                    <label htmlFor="friends-search"></label>
                    <input id="friends-search" type="text" placeholder={`Searching for friends...`}/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="all-friends">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="white" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                <span>{list.length} Friend{list.length>1? "s":""}</span>
            </div>
            {list.map((friend, index)=>(
                <FriendCard key={`${friend.friend_name}#${index}`} image={friend.friend_image} name={friend.friend_name}/>
                )
            )}
        </div>
    );
}

Friends.defaultProps={
    list:[
        {friend_image: fluffy, friend_name: "FluffyAwesome"},
        {friend_image: fluffy, friend_name: "FluffyAwesome"},
        {friend_image: fluffy, friend_name: "FluffyAwesome"},
        {friend_image: fluffy, friend_name: "FluffyAwesome"},
        {friend_image: fluffy, friend_name: "FluffyAwesome"},
        {friend_image: fluffy, friend_name: "FluffyAwesome"},
        {friend_image: fluffy, friend_name: "FluffyAwesome"},
    ]
}

export function FriendCard({image, name}){
    const [open, setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    };
    return(
        <>
            <div className="friend-card">
                <div className="friend-image-1">
                    <img className="friend-image-11" src={image} alt="Friend"/>
                </div>
                <h6>{name}</h6>
                <div className="friend-logo-1">
                    <svg onClick={handleOpen} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" className="friend-logo-11 svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path id="path" fill="white" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                </div>
            </div>
            <div className="friends-action">
                <Follow expaind={open}/>
            </div>
        </>
    );
}

FriendCard.defaultProps={
    image: {fluffy},
    name: "Flufyyy"
}

export function AddFriends(){

    return(
        <div className="addFriends">
            <form id="searching-friend" action="#">
                <input className="searching-friend" type="text" placeholder="Type to search for someone..."/>
                <button type="submit">Go</button>
            </form>
            <div className="suggestions">
                <button>View Suggestions</button>
                <div className="result"></div>
            </div>
        </div>
    )
}

export function Notifications({list}){
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

export function Messages({chats}){
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
        ]},
        {sender_name: "Fadwa", sender_image: fluffy, records:[{"Me": "Holla"}, {"Him": "Heyy"}, {"Me": "How's life? u know I ve been asleep for three hours"}]},
        {sender_name: "Ilham", sender_image: fluffy, records:[{"Me": "Here is a french Bonjour"}, {"Him": "Hello my friend"}, {"Me": "Are U good?"}]},
        {sender_name: "Ahlam", sender_image: fluffy, records:[{"Me": "Hi"}, {"Him": "Heyyy"}, {"Me": "God Damn! I did that for as long as I can but u know people change"}]}
    ]
}

export function Conv({sender}){
    const [show, setShow]=useState(false);
    const handleShow=()=>{
        setShow(!show);
    };

    return(
        <div className="hold-chat">
            <div onClick={handleShow} className="chat-holder">
                <img src={sender.sender_image} alt="Sender"/>
                <h4>{sender.sender_name}</h4>
                <div className="last-message">
                    <p>
                        {sender.records ? (sender.records[sender.records.length-1].hasOwnProperty("Me") ?
                        sender.records[sender.records.length-1]["Me"] : 
                        sender.records[sender.records.length-1]["Him"]): ""}
                    </p>
                </div>
                <Unread unread_messages={1}/>
            </div>
            <Reader conversation={sender.records} show={show}/>
            <hr/>
        </div>
    )
}

Conv.defaultProps={
    sender: {sender_name: "Manar", sender_image: fluffy, records:[{"Me": "Hi"}, {"Him": "Hello my friend"}, {"Me": "God Damn!"}]}
}

export function Unread({unread_messages}){
    if(unread_messages)
        return (<div className="unread"><h3>{unread_messages}</h3></div>);
    else
        return <div className=""></div>
}

Unread.defaultProps={
    unread_messages: 0
}

export function Reader({conversation, show}){
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

export function Reply({sender_flag, talk}){
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

export function Follow({expaind}){
    const user = useSelector(state => state.usersData);
    const [go_m, setGo_m]=useState(false);
    const handleMessage=()=>{
        setGo_m(!go_m);
    }
    
    if(expaind){
        return(
            <div className="go-message-wrapper">
                <div className="follow">
                    <button onClick={handleMessage} className={`${go_m ? "clicked ": ""}message`}>Message</button>
                    <button className="clicked ">Profile</button>
                </div>
                <div className="go-message">
                    <GoMessage go_message={go_m} myUser={user} hisUser={user}/>
                </div>
            </div>
        )
    }else{
        return(
            <div className=""></div>
        )
    }
}

Follow.defaultProps={
    expaind: false
}

export function GoMessage({go_message, myUser, hisUser}){
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

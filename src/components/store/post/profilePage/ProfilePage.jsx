import React from 'react';
import Post from '../Post';
import Friend from '../../../profile/info/nav/network/friend/Friend';
import "./profilePage.css";
import Picture from '../../../profile/info/nav/picture/Picture';

export default function ProfilePage({pic, name, bio, isFriend, isMe, friends, posts}) {
    return (
        <div className="profile-page">
            <Picture isMe={isMe} picture={pic}/>
            <h3 className="my-name">{name}</h3>
            <div className="bio">{bio}</div>
            { 
                !isMe &&
                <div className="send-inv">Invitation</div>
            }
            {
                ( isMe || friends.public ) && 
                    friends.list.map((fr, index)=><Friend picture={pic} name={name} jsx={""}/> )
            }
            {
                ( isMe || isFriend ) && 
                    posts.map((post, index)=><Post post={post} key={`${post.posterName}%${index}`}/>)

            }
        </div>
    )
}

ProfilePage.defaultProps={
    pic: "http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg",
    name: "El Ouali",
    bio: "I Will Never Give Up",
    isMe: false,
    isFriend: false, 
    friends: {
        public: true,
        list: []
    },
    posts: [] 
}

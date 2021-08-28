import React from 'react';
import Post from '../Post';
import Friend from '../../../profile/info/nav/network/friend/Friend';
import "./profilePage.css";
import Picture from '../../../profile/info/nav/picture/Picture';

export default function ProfilePage({picture, name, bio, isFriend, isMe, friends, posts}) {
    return (
        <div className="profile-page">
            <Picture isMe={isMe} picture={picture}/>
            <h3 className="my-name">{name}</h3>
            <div className="bio">{bio}</div>
            { 
                !isMe &&
                <div className="send-inv">Invitation</div>
            }
            {
                ( isMe || friends.public ) && 
                    friends.list.map((fr, index)=><Friend picture={picture} name={name} jsx={""}/> )
            }
            {
                ( isMe || isFriend ) && 
                    posts.map((post, index)=><Post post={post} key={`${post.posterName}%${index}`}/>)

            }
        </div>
    )
}

ProfilePage.defaultProps={
    picture: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
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

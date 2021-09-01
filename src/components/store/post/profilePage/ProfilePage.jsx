import React from 'react';
import Post from '../Post';
import Friend from '../../../profile/info/nav/network/friend/Friend';
import "./profilePage.css";
import Picture from '../../../profile/info/nav/picture/Picture';

export default function ProfilePage({picture, name, bio, isFriend, isMe, friends, posts}) {
    return (
        <div className="profile-page">
            <Picture isMe={isMe} name={name} bio={bio}/>
            { 
                !isMe &&
                <div className="send-inv">Invitation</div>
            }
            {
                ( isMe || friends.public ) && 
                    friends.list.map((fr, index)=><Friend picture={picture} name={name} jsx={""} key={`${index}%:`} /> )
            }
            {
                ( isMe || isFriend ) && 
                    posts.map((post, index)=><Post post={post} key={`${post.posterName}%${index}`} base={false}/>)

            }
        </div>
    )
}

ProfilePage.defaultProps={
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fgirl-smiling&psig=AOvVaw11QZSrP1wiaahF4UZ3wo0M&ust=1630579718849000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCRvPnM3fICFQAAAAAdAAAAABAD",
    name: "El Ouali",
    bio: "I Will Never Give Up",
    isMe: true,
    isFriend: true, 
    friends: {
        public: true,
        list: []
    },
    posts: [] 
}

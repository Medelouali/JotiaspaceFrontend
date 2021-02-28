import React from 'react';
import { useDispatch } from "react-redux";
import pager from "../../redux/actions/pager";

function NewPost() {
    const dispatch=useDispatch();

    const goPost=()=>{
        dispatch(pager(1));
    };

    return (
        <div className="newPost">
            <button onClick={goPost} className="post-b">Post</button>
            <button className="profile-b">Profile</button>
        </div>
    )
}

export default NewPost

import React from 'react';
import { useDispatch } from "react-redux";
import pager from "../../redux/actions/pager";

function NewPost() {
    const dispatch=useDispatch();

    return (
        <div className="newPost">
            <button onClick={()=>dispatch(pager("post"))} className="post-b">Post</button>
            <button onClick={()=>dispatch(pager("profile"))} className="profile-b">Profile</button>
        </div>
    );
}

export default NewPost

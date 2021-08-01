import React from 'react';
import "./comment.css";


export default function Comment({is_ready}){
    if(is_ready){
        return(
            <form className="message-form" method="post">
                <textarea name="comment" className="post-comment"></textarea>
                <button type="submit">Comment</button>
            </form>
        );
    }else
        return(
            <div className="nothing"></div>
        );
};

Comment.defaultProps={
    is_ready: false,
    is_comment: false
}


import React, { useState } from 'react'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import  Comment  from './comment/Comment';

import "./commentOnly.css";

export default function CommentOnly({comment_flag}){
    const [ready, setReady]=useState(false);
    const manage=()=>{
        setReady(!ready);
    };

    if(comment_flag){
        return(
            <div className="get-comment">
                <h5 onClick={manage}>Add Comment?</h5>
                <div className="img" onClick={manage} >
                    { !ready ? <ChatOutlinedIcon/>: <ChatBubbleOutlineOutlinedIcon/>}
                </div>
                <Comment is_ready={ready}/>
            </div>
        );
    }else
        return(
            <div className="nothing"></div>
        );
}

CommentOnly.defaultProps={
    comment_flag: false
}

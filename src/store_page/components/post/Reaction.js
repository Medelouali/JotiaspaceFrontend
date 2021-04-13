import React, { useState } from "react";
import fluffy from "../svg/fluffy.jpg";
import comment from "../svg/react/comment.svg";
import heart from "../svg/react/heart.svg";
import like from "../svg/react/like.svg";
import dislike from "../svg/react/dislike.svg";
import lool from "../svg/react/laugh.svg";
//import arrow from "../svg/double-arrow.svg";
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

export function Reaction({reacters, is_comment_reaction}){
    return(
        <div className="reactions">
            <div className="">
                {reacters.map((reacter, index_1)=>(
                    reacter.re_words.map((word, index_2)=>(
                        <div className="reaction" key={`${index_1}${word}#${index_2}`}>
                            <div className="reacter">
                                <div className="reacter-image">
                                    <img src={reacter.re_image} alt="Reacter"/>
                                </div>
                                <h5>{reacter.re_name}</h5>
                                <img className="reacter-logo" src={reacter.re_logo} alt="Logo"/>
                            </div>
                            <p>{word}</p>
                        </div>
                    ))
                ))}
                <hr/>
            </div>
            <CommentOnly comment_flag={is_comment_reaction}/>
        </div>
    );
}

Reaction.defaultProps={
    reacters:[
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]},
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]},
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]},
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]}
    ],
    is_comment_reaction: false
}

export function Dialogue({flag, is_comment_dialogue}){
    if(flag===0){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Fluffy", re_logo: comment, re_words:["You are Dope", "Awesome"]},
                    {re_image: fluffy, re_name: "Fluffy", re_logo: comment, re_words:["Really Good", "Beautifull"]}
                ]} is_comment_reaction={is_comment_dialogue}/>
        );
    }else if(flag===1){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Leo", re_logo: heart, re_words:[""]},
                    {re_image: fluffy, re_name: "Leo", re_logo: heart, re_words:[""]},
                ]} is_comment_reaction={is_comment_dialogue}/>
        );
    }else if(flag===2){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Leo Decap", re_logo: like, re_words:[""]},
                    {re_image: fluffy, re_name: "Leo Deco", re_logo: like, re_words:[""]},
                ]} is_comment_reaction={is_comment_dialogue}/>
        );
    }else if(flag===3){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Lee Monna", re_logo: dislike, re_words:[""]},
                    {re_image: fluffy, re_name: "Putta", re_logo: dislike, re_words:[""]},
                ]} is_comment_reaction={is_comment_dialogue}/>
        );
    }else if(flag===4){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Hamid", re_logo: lool, re_words:[""]},
                    {re_image: fluffy, re_name: "Ali", re_logo: lool, re_words:[""]},
                ]} is_comment_reaction={is_comment_dialogue}/>
        );
    }else{
        return(
            <div className=""></div>
        );
    }
};

Dialogue.defaultProps={
    flag: -1,
    is_comment_dialogue: false
};


export function Comment({is_ready}){
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

export function CommentOnly({comment_flag}){
    const [ready, setReady]=useState(false);
    // const divRef=useRef(null);

    const manage=()=>{
        setReady(!ready);
        // if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "center"});
        // console.log(divRef.current);
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
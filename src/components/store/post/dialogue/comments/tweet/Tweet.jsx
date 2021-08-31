import React from 'react';
import { motion } from "framer-motion";
import "./tweet.css";

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

export default function Tweet({ callback, picture, name, tweet, replies , hidden, loves, likes, dislikes, rea}) {
    if(hidden) return <></>;
    return (
        <motion.div 
            initial={{x: "100%"}}
            animate={{x: 0}}
            transition={{duration: 0.3}}
            className="tweeter">
            <div onClick={callback} className="tweeter-picture"><img src={picture} alt="" /></div>
            <div onClick={callback} className="tweeter-name">{name}</div>
            <div onClick={callback} className="tweeter-text">{tweet}</div>
            <div className="tweeter-replies">
                <div className="tweeter-reactions">
                    <div onClick={rea("loves")} className="tweeter-reaction"><FavoriteBorderOutlinedIcon/><i>{loves}</i></div>
                    <div onClick={rea("likes")} className="tweeter-reaction"><ThumbUpAltOutlinedIcon/><i>{likes}</i></div>
                    <div onClick={rea("dislikes")} className="tweeter-reaction"><ThumbDownAltOutlinedIcon/><i>{dislikes}</i></div>
                </div>
                <div className="reps">Replies({replies})</div>
            </div>
        </motion.div>
    )
}

Tweet.defaultProps={
    picture: "https://media.istockphoto.com/photos/beautiful-young-woman-with-curly-hair-picture-id1148067797?k=20&m=1148067797&s=612x612&w=0&h=W5_KYkQ3DNizjZDBdYUOVp4Gn6h2DnlkbBpLnh8utI4=",
    callback: ()=>{},
    rea: (r)=>{
        return (r)=>{}
    },
    hidden: false,
    loves: 0,
    likes: 0,
    dislikes: 0,
    replies: 0
}
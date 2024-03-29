import React from 'react';
import "./dialogue.css";

// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

import fluffy from "../../svg/fluffy.jpg"

import Reaction from "./reaction/Reaction";
import Comments from './comments/Comments';

export default function Dialogue({flag}){
    if(flag===0){
        return(
            <div className="dialogue-comments">
                <Comments/>
            </div>
        );
    }else if(flag===1){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Leo", re_logo: <FavoriteBorderIcon/>, re_words:[""]},
                    {re_image: fluffy, re_name: "Leo", re_logo: <FavoriteBorderIcon/>, re_words:[""]},
                ]} />
        );
    }else if(flag===2){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Leo Decap", re_logo: <ThumbUpAltOutlinedIcon/>, re_words:[""]},
                    {re_image: fluffy, re_name: "Leo Deco", re_logo: <ThumbUpAltOutlinedIcon/>, re_words:[""]},
                ]} />
        );
    }else if(flag===3){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Lee Monna", re_logo: <ThumbDownOutlinedIcon/>, re_words:[""]},
                    {re_image: fluffy, re_name: "Putta", re_logo: <ThumbDownOutlinedIcon/>, re_words:[""]},
                ]}/>
        );
    }else if(flag===4){
        return(
            <Reaction reacters={
                [
                    {re_image: fluffy, re_name: "Hamid", re_logo: <EmojiEmotionsOutlinedIcon/>, re_words:[""]},
                    {re_image: fluffy, re_name: "Ali", re_logo: <EmojiEmotionsOutlinedIcon/>, re_words:[""]},
                ]}/>
        );
    }else{
        return(
            <div className=""></div>
        );
    }
};

Dialogue.defaultProps={
    flag: -1
};

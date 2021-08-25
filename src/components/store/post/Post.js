import React, { useState, useRef } from 'react';
import { shorten } from "../algorithms/algorithms";
import "./post.css";

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

import Dialogue from "./dialogue/Dialogue";
import Images from './images/Images';
import Cell from './cell/Cell';

const urls=[
    "https://i.pinimg.com/236x/d3/dd/09/d3dd096e6b94620c6de7091541b80d3b.jpg",
    "https://i.pinimg.com/236x/2d/2d/39/2d2d396843a0a1d62589988fd16a815f.jpg",
    "https://i.pinimg.com/236x/10/ef/46/10ef466d5c6a9239c279b883e6c5d88d.jpg",
    "https://i.pinimg.com/236x/4b/37/c7/4b37c72691a2b412a92b037b625c7bc8.jpg",
    "https://i.pinimg.com/236x/d2/ba/46/d2ba460d85add026bad85e79c6d89484.jpg",
    "https://i.pinimg.com/236x/f8/d6/8e/f8d68e3f103d9a24dcdb4570ff6f7146.jpg",
    "https://i.pinimg.com/236x/be/66/ac/be66ac085c6f085734b4741406d05132.jpg",
    "https://i.pinimg.com/236x/c0/db/9e/c0db9ed759e0be4d8f3aa6cee8baaca6.jpg",
    "https://i.pinimg.com/236x/eb/58/af/eb58af292e621886d551c1e8dc506a27.jpg"
];
function Post({post}){
    console.log(post);
    const divRef=useRef(null);
    const [comments, setComments]=useState(0);
    const [commentsBlue, setCommentsblue]=useState(false);
    const [dialogue, setDialogue]=useState(-1);

    const commentsCounter=()=>{
        setComments(!commentsBlue ? comments+1: comments);
        setCommentsblue(true);
        setDialogue(!dialogue ? -1: 0);
        if(divRef.current) divRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const [loves, setLoves]=useState(post.loves);
    const [lovesBlue, setLovesblue]=useState(false);
    const lovesCounter=()=>{
        if(!lovesBlue){
            setLoves(loves+1);
            setLovesblue(true);
        }else{
            setLoves(loves-1);
            setLovesblue(false);
        }
    };

    const [likes, setLikes]=useState(post.likes);
    const [likesBlue, setLikesblue]=useState(false);
    const likesCounter=()=>{
        if(likesBlue){
            setLikes(likes-1);
            setLikesblue(false);
        }else{
            setLikesblue(true);
            setLikes(likes+1);
        };
        if(dislikesBlue){
            setDislikesblue(false);
            setDislikes(dislikes-1);
        }
    };

    const [dislikes, setDislikes]=useState(post.dislikes);
    const [dislikesBlue, setDislikesblue]=useState(false);
    const dislikesCounter=()=>{
        if(dislikesBlue){
            setDislikes(dislikes-1);
            setDislikesblue(false);
        }else{
            setDislikesblue(true);
            setDislikes(likes+1);
        };
        if(likesBlue){
            setLikesblue(false);
            setLikes(likes-1);
        }
    };

    const [lools, setLools]=useState(post.lools);
    const [loolsBlue, setLoolsblue]=useState(false);
    const loolsCounter=()=>{
        if(loolsBlue){
            setLoolsblue(false);
            setLools(lools-1);
        }else{
            setLoolsblue(true);
            setLools(lools+1);
        }
    };

    const setDial=(num)=>{
        return ()=>{
            setDialogue(dialogue===num ? -1: num);
            if(divRef.current) divRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        };
    };
    
    const img=(num)=>{
        if(num===dialogue) return <VisibilityOffOutlinedIcon onClick={setDial(num)}/>
        return <VisibilityOutlinedIcon onClick={setDial(num)}/>
    }
    return(
        <div className="post">
            <div className="card-header">
                <div className="poster-image">
                    <img className="" src="http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg" alt=""/>
                </div>
                <h3>{post.posterName}</h3>
            </div>

            <div className="card-data">
                <Images urls={urls}/>
                <p>{post.description}</p>
            </div>

            <div className="cells">
                <Cell icons={[<ChatOutlinedIcon/>, <ChatBubbleOutlineIcon/>]} iTag={shorten(comments)} 
                    imgTag={false} cb={commentsCounter} current={dialogue} index={0}/>
                <Cell icons={[<FavoriteOutlinedIcon/>, <FavoriteBorderIcon/>]} iTag={shorten(loves)} 
                    imgTag={img(1)} cb={lovesCounter} current={dialogue} index={1}/>
                <Cell icons={[<ThumbUpAltIcon/>, <ThumbUpAltOutlinedIcon/>]} iTag={shorten(likes)} 
                    imgTag={img(2)} cb={likesCounter} current={dialogue} index={2}/>
                <Cell icons={[<ThumbDownIcon/>, <ThumbDownOutlinedIcon/>]} iTag={shorten(dislikes)} 
                    imgTag={img(3)} cb={dislikesCounter} current={dialogue} index={3}/>
                <Cell icons={[<EmojiEmotionsIcon/>, <EmojiEmotionsOutlinedIcon/>]} iTag={shorten(lools)} 
                    imgTag={img(4)} cb={loolsCounter} current={dialogue} index={4}/>
            </div>
            <div className="dialo" ref={divRef}><Dialogue flag={dialogue}/></div>
        </div>
    );
}

Post.defaultProps={
    post: {
        posterName: "Mark Zuckerberg",
        urls:[
            "https://i.pinimg.com/236x/d3/dd/09/d3dd096e6b94620c6de7091541b80d3b.jpg",
            "https://i.pinimg.com/236x/2d/2d/39/2d2d396843a0a1d62589988fd16a815f.jpg",
            "https://i.pinimg.com/236x/10/ef/46/10ef466d5c6a9239c279b883e6c5d88d.jpg",
            "https://i.pinimg.com/236x/4b/37/c7/4b37c72691a2b412a92b037b625c7bc8.jpg",
            "https://i.pinimg.com/236x/d2/ba/46/d2ba460d85add026bad85e79c6d89484.jpg",
            "https://i.pinimg.com/236x/f8/d6/8e/f8d68e3f103d9a24dcdb4570ff6f7146.jpg",
            "https://i.pinimg.com/236x/be/66/ac/be66ac085c6f085734b4741406d05132.jpg",
            "https://i.pinimg.com/236x/c0/db/9e/c0db9ed759e0be4d8f3aa6cee8baaca6.jpg",
            "https://i.pinimg.com/236x/eb/58/af/eb58af292e621886d551c1e8dc506a27.jpg"
        ],
        description: `
            The places where Edmonia’s bones were fractured still hold violent reverberations. 
            When it rains I massage the static hum out of each point of impact. There is nothing heavier 
            than flesh that wishes to be on another axis, except perhaps stone she shaped. Tonight she tells me, 
            it’s impossible to bring a lover to the small death she deserves.
        `,
        comments:[
            {
                commenter_id: 1,
                comment: "Really awesome hoppping we could deal with each other..."
            }
        ],
        loves: 0,
        likes: 0,
        dislikes: 0,
        lools: 0
    }
}

export default Post;
import React, { useState, useRef } from 'react';
import { useSelector } from "react-redux";
import { shorten } from "../algorithms/algorithms";
import { motion } from "framer-motion";
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

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Dialogue from "./dialogue/Dialogue";
import Images from './images/Images';
import Cell from './cell/Cell';
import ProfilePage from './profilePage/ProfilePage';

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
function Post({post, base}){
    // console.log(post);
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
    const  [more, setMore]=useState(false);
    const  [profile, setProfile]=useState(false);
    const handleMore=()=>{
        setMore(!more);
        if(!more) setProfile(false);
    };

    const handleProfile=()=>{
        setProfile(!profile);
    }

    const profilePosts = useSelector(state => state.updateUser).posts;//jsut for etsting the ui
    return(
        <div className="post">
            <div className="card-header">
                <div onClick={handleMore} className="poster-image">
                    <img className="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                </div>
                <h3 onClick={handleMore}>{post.posterName}</h3>
                {
                    base && 
                    <div className="view-more">
                        { more ? 
                            <div onClick={handleMore} className="less"><ExpandMoreIcon/></div> : 
                            <div  onClick={handleMore} className="more"><MoreHorizIcon/></div>    
                        }
                    </div>
                }
            </div>

            <div className="card-data">
                <Images urls={urls}/>
                <p>{post.description}</p>
                {more && 
                    <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: "100%"}}
                        transition={{ duration: 0.5 }}
                    >
                        <li onClick={handleProfile} >Profile</li>
                        <li>Follow <span>{post.posterName}</span></li>
                        <li>Hide <span>{post.posterName}</span>'s posts</li>
                    </motion.ul>
                }
                {
                    more && profile && 
                    <motion.div 
                    initial={{y: "100vh"}}
                    animate={{y: 0}}
                    className="pro">
                        <ProfilePage name={post.posterName} posts={profilePosts}/>
                    </motion.div>
                }
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
    },
    base: true
}

export default Post;
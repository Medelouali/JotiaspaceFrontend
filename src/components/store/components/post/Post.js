import React, { useState, useRef } from 'react';
import eye from "../svg/eye.svg";
import { shorten } from "../algorithms/algorithms";
import "./post.css";

import { Dialogue } from "./Reaction";
import Images from './Images';

function Post({post}){
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
    
    return(
        <div className="post">
            <div className="card-header">
                <div className="poster-image">
                    <img className="" src="http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg" alt=""/>
                </div>
                <h3>{post.poster_name}</h3>
            </div>

            <div className="card-data">
                <Images urls={post.urls}/>
                <p>{post.description}</p>
            </div>

            <div className="cells">
                <div className="cell">
                    <svg onClick={commentsCounter} aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" className="icon svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={commentsBlue ? "blue": "currentColor"} d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>
                    <i>{shorten(comments)}</i>
                </div>

                <div className="cell">
                    <svg onClick={lovesCounter} aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" className="icon svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={lovesBlue ? "red": "currentColor"} d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                    <i>{shorten(loves)}</i>
                    <img onClick={setDial(1)} className="eye" src={eye} alt="view"/>
                </div>

                <div className="cell">
                    <svg onClick={likesCounter} aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" className={`icon svg-inline--fa fa-thumbs-up fa-w-16`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={likesBlue ? "blue": "currentColor"} d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path></svg>
                    <i>{shorten(likes)}</i>
                    <img onClick={setDial(2)} className="eye" src={eye} alt="view"/>
                </div>

                <div className="cell">
                    <svg onClick={dislikesCounter} aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-down" className="icon svg-inline--fa fa-thumbs-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={dislikesBlue ? "#4A412A": "currentColor"} d="M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"></path></svg>
                    <i>{shorten(dislikes)}</i>
                    <img onClick={setDial(3)} className="eye" src={eye} alt="view"/>
                </div>

                <div className="cell">
                    <svg onClick={loolsCounter} aria-hidden="true" focusable="false" data-prefix="far" data-icon="grin-squint-tears" className="icon svg-inline--fa fa-grin-squint-tears fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={loolsBlue ? "yellow": "currentColor"} d="M117.1 384.1c-25.8 3.7-84 13.7-100.9 30.6-21.9 21.9-21.5 57.9.9 80.3s58.3 22.8 80.3.9C114.3 479 124.3 420.8 128 395c.8-6.4-4.6-11.8-10.9-10.9zm-41.2-41.7C40.3 268 53 176.1 114.6 114.6 152.4 76.8 202.6 56 256 56c36.2 0 70.8 9.8 101.2 27.7 3.8-20.3 8-36.1 12-48.3C333.8 17.2 294.9 8 256 8 192.5 8 129.1 32.2 80.6 80.6c-74.1 74.1-91.3 183.4-52 274 12.2-4.1 27.7-8.3 47.3-12.2zm352.3-187.6c45 76.6 34.9 176.9-30.8 242.6-37.8 37.8-88 58.6-141.4 58.6-30.5 0-59.8-7-86.4-19.8-3.9 19.5-8 35-12.2 47.2 31.4 13.6 65 20.6 98.7 20.6 63.5 0 126.9-24.2 175.4-72.6 78.1-78.1 93.1-195.4 45.2-288.6-12.3 4-28.2 8.1-48.5 12zm-33.3-26.9c25.8-3.7 84-13.7 100.9-30.6 21.9-21.9 21.5-57.9-.9-80.3s-58.3-22.8-80.3-.9C397.7 33 387.7 91.2 384 117c-.8 6.4 4.6 11.8 10.9 10.9zm-187 108.3c-3-3-7.2-4.2-11.4-3.2L106 255.7c-5.7 1.4-9.5 6.7-9.1 12.6.5 5.8 5.1 10.5 10.9 11l52.3 4.8 4.8 52.3c.5 5.8 5.2 10.4 11 10.9h.9c5.5 0 10.3-3.7 11.7-9.1l22.6-90.5c1-4.2-.2-8.5-3.2-11.5zm39.7-25.1l90.5-22.6c5.7-1.4 9.5-6.7 9.1-12.6-.5-5.8-5.1-10.5-10.9-11l-52.3-4.8-4.8-52.3c-.5-5.8-5.2-10.4-11-10.9-5.6-.1-11.2 3.4-12.6 9.1L233 196.5c-1 4.1.2 8.4 3.2 11.4 5 5 11.3 3.2 11.4 3.2zm52 88.5c-29.1 29.1-59.7 52.9-83.9 65.4-9.2 4.8-10 17.5-1.7 23.4 38.9 27.7 107 6.2 143.7-30.6S416 253 388.3 214.1c-5.8-8.2-18.5-7.6-23.4 1.7-12.3 24.2-36.2 54.7-65.3 83.8z"></path></svg>
                    <i>{shorten(lools)}</i>
                    <img onClick={setDial(4)} className="eye" src={eye} alt="view"/>
                </div>
            </div>
            <div className="dialo" ref={divRef}><Dialogue flag={dialogue}/></div>
        </div>
    );
}

Post.defaultProps={
    post: {
        poster_name: "Mark Zuckerberg",
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
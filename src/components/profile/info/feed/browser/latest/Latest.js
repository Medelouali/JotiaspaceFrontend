import React, { useEffect, useState } from 'react';
import axios from "axios";
import Post from '../../../../../store/post/Post';

import "./latest.css";
import { reactLocalStorage } from 'reactjs-localstorage';
import Start from '../../../../../interface/info/start/Start';

function Latest() {
    const [posts, setPosts]=useState(null);
    const [error, setError]=useState("");

    useEffect(() => {
        const getData=async()=>{
            try {
                const { data }=await axios.post("https://jotiaspacewebsite.herokuapp.com/posts/myPosts", {
                    tokens: {
                        authToken: reactLocalStorage.getObject("authToken", "", true)
                    }
                });
                console.log(data);
                if(data.done===true) setPosts(data.data);
                else setError(data.error);
            } catch (error) {
                setError("Please check out your network connection");
            }
        };
        getData();
    }, []);
    return (
        <div className="latest">
            <h5>Posts</h5>
            <div className="posts">
                {
                    posts===null ? <Start start={true} phrase={"Getting your posts"}/> :
                    error!=="" ? <h6>{error}</h6> : 
                    posts.map((post, index)=><Post post={ post } key={`${index}#${post.posterName}`} />)                    
                }
            </div>
        </div>
    )
}

export default Latest;

import React, { useEffect, useState } from 'react';
import "./all.css";
import Post from '../../post/Post';
import axios from 'axios';
import Start from '../../../interface/info/start/Start';

import { reactLocalStorage } from "reactjs-localstorage";

function All() {
    const [error, setError]=useState("");
    const [posts, setPosts]=useState(null);

    useEffect(() => {
        const getData=async()=>{
            try {
                const { data }=await axios.post("https://jotiaspacewebsite.herokuapp.com/posts/allPosts", {
                    tokens: {
                        authToken: reactLocalStorage.getObject("authToken", "", true)
                    }
                });
                setPosts(data.data);
            } catch (err) {
                setError("Check your network connection please");
            }
        };
        getData();
        console.log(1);
    }, []);
    return (
        <div className="all-posts">
            {
                posts===null ? <Start phrase={"Getting posts..."} start={true}/> :
                posts===[] ? <h6>There is no posts</h6> :
                error!=="" ? <h6>error</h6>: posts.map((post, index)=><Post post={post} key={`${post.posterName}#${index}`}/>)
            }
        </div>
    )
}

export default All

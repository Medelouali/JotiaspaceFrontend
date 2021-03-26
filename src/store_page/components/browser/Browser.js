import React from "react";
import Post from "../post/Post";


import "./browser.css";

function Browser(){
    //const value = useSelector(state=>state.usersData);
    
    return(
        <div className="store-browser">
            <Post/>
        </div>
    );
};

export default Browser;
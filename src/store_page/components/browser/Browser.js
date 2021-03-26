import React, { useRef } from "react";
import Post from "../post/Post";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import scroller from "../../../redux/actions/scroller";

import "./browser.css";

function Browser(){
    //const value = useSelector(state=>state.usersData);
    const dispatch=useDispatch();

    const divRef=useRef(null);
    const handleScroll=()=>{
        if(divRef.current){
            const { scrollTop }=divRef.current;
            const scrolling= scrollTop > 100;
            if(scrolling){
                dispatch(scroller(true));
            }
        }
    };
    return(
        <div onScroll={handleScroll} ref={divRef} className="store-browser">
            <Post/>
        </div>
    );
};

export default Browser;
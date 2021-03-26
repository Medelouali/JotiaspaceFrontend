import React from 'react';
import "./navigator.css";
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";

function Navigator(){

    const dispatch = useDispatch();
    const handlePage=(arg)=>{
        return()=>{
            dispatch(pager(arg));
        };
    };


    return(
        <div className="store-links">
            <div className="navigator-core">
                <h3>Categories</h3>
                <h3>Trending</h3>
                <h3>Videos</h3>
                <h3 >Photos</h3>
                <h3 onClick={handlePage("profile")}>Profile</h3>
                <h3 onClick={handlePage("post")}>Post</h3>
            </div>
        </div>
    );
}

export default Navigator;
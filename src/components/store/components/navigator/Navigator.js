import React from 'react';
import "./navigator.css";
import { useDispatch } from "react-redux";
import pager from "../../../../redux/actions/pager";
import storeHome from "../../../../redux/actions/storeHome";
import { useSelector } from "react-redux";

function Navigator(){
    const page=useSelector(state=>state.storeHome);

    const dispatch = useDispatch();
    const handlePage=(arg)=>{
        return()=>{
            dispatch(pager(arg));
        };
    };

    const handleStore=(page)=>{
        return()=>{
            dispatch(storeHome(page));
        }
    }

    const selected=(arg)=>{
        if(arg===page) return "on-page";
        return "";
    }
    return(
        <div className="store-links">
            <div className="navigator-core">
                <h3 onClick={handleStore("all")} className={selected("all")}>All</h3>
                <h3 onClick={handleStore("categories")} className={selected("categories")}>Categories</h3>
                <h3 onClick={handleStore("trending")} className={selected("trending")}>Trending</h3>
                <h3 onClick={handleStore("vidoes")} className={selected("vidoes")}>Videos</h3>
                <h3 onClick={handlePage("profile")}>Profile</h3>
                <h3 onClick={handlePage("post")}>Post</h3>
            </div>
        </div>
    );
}

export default Navigator;
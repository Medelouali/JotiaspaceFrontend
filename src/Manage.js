import React from 'react';
import Home from "./components/home/welcome/Home";
import Post from './components/interface/Post';
import Profile from './components/profile/Profile';
import Store from './components/store/main/Store';

function Manage({page}) {
    switch(page){
        case "home":
            return(
                <Home/>
            );
        case "store":
            return(
                <Store/>
            );
        case "profile":
            return(
                <Profile/>
            )
        case "post":
            return(
                <Post/>
            );
        default:
            const value=page === "home" || "home-con" || page==="home-abo" || page==="home-ser"
                                || page==="home-in" || page==="home-up";
            if(value) return(<Home page={page}/>);
            return(
                <div className="">Invalid Route...</div>
            )
    };
}

export default Manage;

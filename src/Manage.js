import React from 'react';
import Home from "./home_page/components/Home";
import Post from './interface/Post';
import Profile from './profile/Profile';
import Store from './store_page/components/Store';

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
            const value=page === "home-con" || page==="home-abo" || page==="home-ser"
                                || page==="home-in" || page==="home-up";
            if(value) return(<Home page={page}/>);
            return(
                <div className="">Invalid Route</div>
            )
    };
}

export default Manage;

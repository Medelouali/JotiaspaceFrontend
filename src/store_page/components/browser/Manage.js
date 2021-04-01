import React from 'react';
import { useSelector } from "react-redux";
import All from './all/All';
import Categories from './categories/Categories';
import Trending from './trending/Trending';
import Videos from './vidoes/Videos';


function Manage() {
    const page=useSelector(state=>state.storeHome);
    switch(page){
        case "categories":
            return <Categories/>
        case "trending":
            return <Trending/>
        case "vidoes":
            return <Videos/>
        default:
            return<All/>

    }
}

export default Manage

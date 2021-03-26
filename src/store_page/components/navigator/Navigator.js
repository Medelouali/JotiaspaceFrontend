import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
//import ScrollerX  from '../scrollers/ScrollerX';
//import NewPost from "./NewPost";
import useMedia from "use-media";
import "./navigator.css";

function Navigator(){
    const [small, setSmall]=useState({isSmall: false, isScrolling: false});
    const smallScreen=useMedia({maxWidth: "800px"});
    const scrolling=useSelector(state => state.scroller);
    useEffect(() => {
        setSmall({ isSmall: smallScreen, 
                isScrolling: scrolling 
            });
    });

    return(
        <div className={(small.isSmall && small.isScrolling ? "bottom ": "") + "store-links"}>
            <div className="navigator-core">
                <h3>Categories</h3>
                <h3>Trending</h3>
                <h3>Videos</h3>
                <h3>Photos</h3>
            </div>
        </div>
    );
}

export default Navigator;
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Messanger from '../../../../../store/messanger/Messanger';
import ProfilePage from '../../../../../store/post/profilePage/ProfilePage';

function Driver({go}){
    // const dispatch = useDispatch();
    const [messagePage, setMessagePage]=useState(3);
    const messangerIndex = useSelector(state =>state.messanger );
    //just for testing
    const me = useSelector(state =>state.updateUser);
    useEffect(() => {
        if(messangerIndex!==-1) setMessagePage(messangerIndex)
    }, [messangerIndex]);

    switch(go){
        case "message":
            if(messagePage===-1 || messangerIndex===-1) return <></>;
            return<Messanger app={messagePage}/>;
        case "profile":
            return(<ProfilePage name={me.username} bio={me.bio} posts={me.posts} />);
        default:
            return(<div className=""></div>);
    };
}

export default Driver;

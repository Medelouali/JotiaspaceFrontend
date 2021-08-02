import React, { useState, useEffect } from 'react';
import Profile from './profile/Profile';
import { useSelector } from "react-redux";
import Messanger from '../../../../../store/messanger/Messanger';
// import messanger from '../../../../../../redux/actions/messanger';

function Driver({go}){
    // const dispatch = useDispatch();
    const [messagePage, setMessagePage]=useState(3);
    const messangerIndex = useSelector(state =>state.messanger );
    useEffect(() => {
        if(messangerIndex!==-1) setMessagePage(messangerIndex)
    }, [messangerIndex]);

    switch(go){
        case "message":
            if(messagePage===-1 || messangerIndex===-1) return <></>;
            return<Messanger app={messagePage}/>;
        case "profile":
            return(<Profile/>);
        default:
            return(<div className=""></div>);
    };
}

export default Driver;

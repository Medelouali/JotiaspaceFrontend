import React from 'react';
import Post from "../../../store_page/components/Post";
import Activity from '../../Charts/Activity';

function Manage({go}) {
    switch(go){
        case "Friends":
            return(
                <div className="">{go}</div>
            );
        case "Intrests":
            return(
                <div className="">{go}</div>
            );
        case "Location":
            return(
                <div className="">{go}</div>
            );
        case "Posts":
            return(
                <div className="manage">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            );
        case "Job":
            return(
                <div className="">{go}</div>
            );
        case "Analytics":
            return(
                <Activity/>
            );
        default:
            return(
                <div className=""></div>
            )
    }
}

export default Manage;

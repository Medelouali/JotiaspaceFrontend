import React from 'react'
import { useDispatch } from "react-redux";
import profile from '../../../../../../redux/actions/profile';
import "./link.css";

function Link({logo, name}) {
    const dispatch = useDispatch();

    const handleOutput=()=>{

        switch(name){
            case "Info":
                dispatch(profile("info"));
                break;
            case "Friends":
                dispatch(profile("friends"));
                break;
            case "Photos":
                dispatch(profile("photos"));
                break;
            default:
        };
    };

    
    return (
        <div onClick={handleOutput} className="link">
            <div className="icon">{logo}</div>
            <h4>{name}</h4>    
        </div>
    )
}

export default Link;

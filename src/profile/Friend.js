import React, { useState } from 'react';
//import { useDispatch, useSelector } from "react-redux";
//import profile from '../redux/actions/profile';
import FriendData from './FriendData';

function Friend({picture, name, jsx}) {
    const [out, setOut] = useState(false);
    const handleOutput=()=>{
        setOut(!out);
    }
    return (
        <>
            <div className="friends">
                <div className="friend-image">
                    <img onClick={handleOutput} src={picture} alt=""/>
                </div>
                <h6 onClick={handleOutput} >{name}</h6>
                <div className="jsx">{jsx}</div>
            </div>
            <FriendData out={out} content={jsx}/>
        </>
    );
}

export default Friend;

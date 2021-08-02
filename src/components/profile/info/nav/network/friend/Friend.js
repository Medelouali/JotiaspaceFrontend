import React, { useState } from 'react';
import FriendData from './friendData/FriendData';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import "./friend.css";

function Friend({picture, name, jsx}) {
    const [out, setOut] = useState(false);
    const handleOutput=()=>{
        setOut(!out);
    }
    return (
        <div className="friends">
            <div className="friends-controller">
                <div className="friend-image">
                    <img onClick={handleOutput} src={picture} alt=""/>
                </div>
                <h6>{name}</h6>
                <div onClick={handleOutput} className="friend-controller">
                    { out ? <ExpandLessIcon/>: <MoreHorizIcon/> }
                </div>
            </div>
            <FriendData out={out} content={jsx}/>
        </div>
    );
}

export default Friend;

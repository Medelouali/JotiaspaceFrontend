import React, { useState, useRef, useEffect } from 'react';
import Driver from '../../../output/Links/Driver';
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import MessageIcon from '@material-ui/icons/Message';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import messanger from '../../../../../../../redux/actions/messanger';


import "./friendData.css";

function FriendData({out, content}){
    const dispatch = useDispatch();
    const [driver, setDriver] = useState("");
    const ref=useRef(null);

    const handleMessage=()=>{
        setDriver("message");
        dispatch(messanger(3));
    };
    const handleProfile=()=>{
        setDriver("profile");
    };

    useEffect(() => {
        if(ref.current)ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [driver]);
    if(out && content){
        return (
            <div className="data">
                <div className="drivers">
                    <div onClick={handleMessage} className="message-dr">
                        <Button variant="contained" color="primary"
                            startIcon={<MessageIcon/>} size="small"
                        >
                            Message
                        </Button>
                    </div>
                    <div onClick={handleProfile} className="profile-dr">
                        <Button variant="contained" color="primary"
                                startIcon={<AccountBoxIcon/>} size="small"
                        >
                            Profile
                        </Button>
                    </div>
                </div>
                <div className="absolute" ref={ref}><Driver go={driver}/></div>
            </div>
        );
    }else{
        return(
            <div className=""></div>
        );
    }
}

export default FriendData;

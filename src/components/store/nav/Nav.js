import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { shorten } from "../algorithms/algorithms";
import profile_image from "../svg/profile.svg";
import Messanger from "../messanger/Messanger";
import Search from "../../home/welcome/header/search/Search";

import messanger from '../../../redux/actions/messanger';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


import socket_io from 'socket.io-client';

import './nav.css';

const endpoint="http://localhost:5000";
const io=socket_io(endpoint, {
    transports: ['websocket'],
    rejectUnauthorized: false
  });

function Nav({fri, inv, not, mes, name, image}){
    const messangerIndex = useSelector(state => state.messanger);
    const dispatch=useDispatch();

    const handleMessage=(page_number)=>{
        return()=>{
            dispatch(messanger(page_number));
        }
    };

    //Just testing socket.io
    useEffect(() => {
        io.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        io.emit("server-response", {"name": "El Ouali"});
    }, []);

    return (
        <header  className="header">
            <nav>
                <div className="nav-bar">
                    <PersonOutlineOutlinedIcon classname={"my-image"}/>
                    <h4>{name}</h4>
                    <div className="search">
                        <Search />
                    </div>
                </div>
                <div className="social">
                    <div onClick={handleMessage(0)} className="social-logo"><PeopleOutlineIcon/><i>{shorten(fri)}</i></div>
                    <div onClick={handleMessage(1)} className="social-logo"><PersonAddIcon/><i>{shorten(inv)}</i></div>
                    <div onClick={handleMessage(2)} className="social-logo"><NotificationsNoneIcon/><i>{shorten(not)}</i></div>
                    <div onClick={handleMessage(3)} className="social-logo"><ChatBubbleOutlineIcon/><i>{shorten(mes)}</i></div>
                </div>
            </nav>
            <div className="">
                <Messanger app={messangerIndex}/>
            </div>
        </header>
    );
}

Nav.defaultProps={
    fri: 0,
    inv: 0,
    not: 0,
    mes: 0,
    name: "El Ouali",
    image: profile_image
}

export default Nav;

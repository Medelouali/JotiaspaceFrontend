import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import store from '../svg/store.svg';
import search from '../svg/search.svg';
import friends from '../svg/friend.svg';
import invitations from '../svg/invitation.svg';
import notifications from '../svg/notification.svg';
import messages from '../svg/message.svg';
import { shorten } from "../algorithms/algorithms";
import profile_image from "../svg/profile.svg";
import Messanger from "../messanger/Messanger";

import './nav.css';
import messanger from '../../../redux/actions/messanger';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';

import socket_io from 'socket.io-client';


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
                    <h5>{name}</h5>
                    <StorefrontOutlinedIcon className={"store-logo"}/>
                    <div className="search">
                        <label htmlFor="search-query"><img id="search" src={search} alt="Search"/></label>
                        <input type="text" name="query" id="query" placeholder="Type something..."/>
                    </div>
                </div>
                <div className="social">
                    <div onClick={handleMessage(0)} className="social-logo"><img className="logo" src={friends} alt="Friends"/><i>{shorten(fri)}</i></div>
                    <div onClick={handleMessage(1)} className="social-logo"><img className="logo" src={invitations} alt="Invitations"/><i>{shorten(inv)}</i></div>
                    <div onClick={handleMessage(2)} className="social-logo"><img className="logo" id="bell" src={notifications} alt="Notifications"/><i>{shorten(not)}</i></div>
                    <div onClick={handleMessage(3)} className="social-logo"><img className="logo" src={messages} alt="Messages"/><i>{shorten(mes)}</i></div>
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

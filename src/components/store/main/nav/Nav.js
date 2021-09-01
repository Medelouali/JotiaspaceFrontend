import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { shorten } from "../../algorithms/algorithms";
import Messanger from "../../messanger/Messanger";
import Search from "../../../home/welcome/header/search/Search";

import messanger from '../../../../redux/actions/messanger';

// import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import socket_io from 'socket.io-client';

import './nav.css';
// import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

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
                    <div className="profile-pict">
                        <img src={image} alt="Profile" className="my-image" />
                    </div>
                    <h4>{name}</h4>
                    <div className="search">
                        <Search placeHolder={"Search..."}/>
                    </div>
                    <div className="social">
                        <div onClick={handleMessage(0)} className="social-logo"><PeopleOutlineIcon/><i>{shorten(fri)}</i></div>
                        <div onClick={handleMessage(1)} className="social-logo"><PersonAddIcon/><i>{shorten(inv)}</i></div>
                        <div onClick={handleMessage(2)} className="social-logo"><NotificationsNoneIcon/><i>{shorten(not)}</i></div>
                        <div onClick={handleMessage(3)} className="social-logo"><ChatBubbleOutlineIcon/><i>{shorten(mes)}</i></div>
                    </div>
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
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
}

export default Nav;

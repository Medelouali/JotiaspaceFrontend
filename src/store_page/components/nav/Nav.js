import React, {useState} from 'react';
import store from '../svg/store.svg';
import search from '../svg/search.svg';
import friends from '../svg/friend.svg';
import invitations from '../svg/invitation.svg';
import notifications from '../svg/notification.svg';
import messages from '../svg/message.svg';
//import caret_up from "../svg/caret-up.svg";
import { shorten } from "../algorithms/algorithms";
import profile_image from "../svg/profile.svg";
import Messanger from "../messanger/Messanger";

import './nav.css';


function Nav({fri, inv, not, mes, name, image}){
    const [activeApp, setActiveApp]=useState(-1);
    const fri_app=()=>{
        setActiveApp(!activeApp ? -1: 0);
    };

    const inv_app=()=>{
        setActiveApp(activeApp===1 ? -1: 1);
    };

    const not_app=()=>{
        setActiveApp(activeApp===2 ? -1: 2);
    };

    const mes_app=()=>{
        setActiveApp(activeApp===3 ? -1: 3);
    };

    return (
        <header  className="header">
            <nav>
                <div className="nav-bar">
                    <img className="my-image" src={image} alt="My Profile"/>
                    <h5>{name}</h5>
                    <img className="store-logo" src={store} alt="Store"/>
                    <div className="search">
                        <label htmlFor="search-query"><img id="search" src={search} alt="Search"/></label>
                        <input type="text" name="query" id="query" placeholder="Type something..."/>
                    </div>
                </div>
                <div className="social">
                    <div className="social-logo"><img onClick={fri_app} className="logo" src={friends} alt="Friends"/><i>{shorten(fri)}</i></div>
                    <div className="social-logo"><img onClick={inv_app} className="logo" src={invitations} alt="Invitations"/><i>{shorten(inv)}</i></div>
                    <div className="social-logo"><img onClick={not_app} className="logo" id="bell" src={notifications} alt="Notifications"/><i>{shorten(not)}</i></div>
                    <div className="social-logo"><img onClick={mes_app} className="logo" src={messages} alt="Messages"/><i>{shorten(mes)}</i></div>
                </div>
            </nav>
            <div className={activeApp!==-1 ? "window-in messanger-window": "messanger-window"}>
                <Messanger app={activeApp}/>
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

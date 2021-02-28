import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import './store.css';
import store from './svg/store.svg';
import search from './svg/search.svg';
import friends from './svg/friend.svg';
import invitations from './svg/invitation.svg';
import notifications from './svg/notification.svg';
import messages from './svg/message.svg';
import caret_up from "./svg/caret-up.svg";
import {shorten} from "./algorithms";
import profile_image from "./svg/profile.svg";
import {Messanger} from "./Messanger";
import logout from "../../redux/actions/logout";

function Nav({fri, inv, not, mes, name}){
    const [open, setOpen]=useState(true);

    const manage=()=>{
        setOpen(!open);
    };

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

    const [scrolling, setScrolling]=useState(false);
    const handleScroll=()=>{
        setScrolling(true);
    }

    const [show, setShow]=useState(false);
    const handleShow=()=>{
        setShow(!show);
    };

    const dispatch = useDispatch();
    return (
        <header onScroll={handleScroll} className={scrolling ? "fix-it": "header"}>
            <nav>
                <div className="left-half">
                    <svg onClick={handleShow} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-down" className={ (show ? "turn ": "") + "back-icon svg-inline--fa fa-angle-double-down fa-w-10"} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>
                    <div className="store">
                        <div className="profile-name">
                            <img id="my-image" src={profile_image} alt="My Profile"/>
                            <h5>{name}</h5>   
                        </div>
                        <img id="store" src={store} alt="Store"/>    
                    </div>
                    <div className="search">
                        <label htmlFor="search-query"><img id="search" src={search} alt="Search"/></label>
                        <input type="text" name="query" id="query" placeholder="      Search..."/>
                    </div>
                </div>
                <div className="social">
                    <div className="padding"></div>
                    <div className="padding"></div>
                    <div className={`${!open ? "move-right ":""}logo-out`}><img onClick={fri_app} className="logo" src={friends} alt="Friends"/><i>{shorten(fri)}</i></div>
                    <div className={`${!open ? "move-right ":""}logo-out`}><img onClick={inv_app} className="logo" src={invitations} alt="Invitations"/><i>{shorten(inv)}</i></div>
                    <div className={`${!open ? "move-right ":""}logo-out`}><img onClick={not_app} className="logo" id="bell" src={notifications} alt="Notifications"/><i>{shorten(not)}</i></div>
                    <div className={`${!open ? "move-right ":""}logo-out`}><img onClick={mes_app} className="logo" src={messages} alt="Messages"/><i>{shorten(mes)}</i></div>
                    <div className="logo-out"><img onClick={manage} className={`${!open ? "rot ":""}logo`} id="caret-up" src={caret_up} alt=""/></div>
                </div>
            </nav>
            <div className={activeApp!==-1 ? "window-in messanger-window": "messanger-window"}>
                <Messanger app={activeApp}/>
            </div>
            <div className={show ? "logout-nav show-nav": "logout-nav"}>
                <div onClick={()=>{dispatch(logout())}} className="nav-go">Log Out</div>
                <div className="nav-go">Settings</div>
            </div>
        </header>
    );
}

Nav.defaultProps={
    fri: 0,
    inv: 0,
    not: 0,
    mes: 0,
    name: "El Ouali"
}

export default Nav;

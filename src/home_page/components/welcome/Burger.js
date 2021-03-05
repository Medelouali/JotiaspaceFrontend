import React, { useState } from "react";
import  useMediaQuery from "react-use-media-query-hook";
//import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";

function Burger(){
    let flag=useMediaQuery("(max-width: 800px)");
    const [burger, setBurger]=useState(false);
    const dispatch = useDispatch();

    const handleBurger=()=>{
        setBurger(!burger);
    };

    const [page, setPage]=useState(0);
    const handleHome=()=>{
        setPage(0);
        dispatch(pager("home"));
    }

    const handleService=()=>{
        setPage(1);
        dispatch(pager("home-ser"));
    }

    const handleAbout=()=>{
        setPage(2);
        dispatch(pager("home-abo"));
    }

    const handleContact=()=>{
        setPage(3);
        dispatch(pager("home-con"));
    }

    if(!flag){
        return(
            <div className="right-half-1">
                <div onClick={handleHome} className="home-1">{!page ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}Home</div>
                <div onClick={handleService} className="services-1">{page===1 ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}Services</div>
                <div onClick={handleAbout} className="about-us-1">{page===2 ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}About</div>
                <div onClick={handleContact} className="contact-us-1">{page===3 ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}Contacts</div>
            </div>
        );
    }else{
        return(
            <>
                <div onClick={handleBurger} className={burger ? "move-burger" : "right-half-2"}>
                    <div className={burger ? "burger-1": "burger"}></div>
                    <div className={burger ? "burger-2": "burger"}></div>
                    <div className={burger ? "burger-3": "burger"}></div>
                </div>
                <div className={burger ? "show-burger links": "links"}>
                    <div onClick={handleHome} className="services-2">{!page ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}Home</div>
                    <div onClick={handleService} className="home-2">{page===1 ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}Services</div>
                    <div onClick={handleAbout} className="about-us-2">{page===2 ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}About</div>
                    <div onClick={handleContact} className="contact-us-2">{page===3 ? <span><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="here svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg></span>: <span/>}Contacts</div>
                </div>
            </>
        );
    };
};

export default Burger;
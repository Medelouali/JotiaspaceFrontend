import React from "react";
import heart from "./shapes/heart.svg";
import text from "./intro";
import logo from "./shapes/logo.svg"
import { useDispatch } from "react-redux";
import pager from "../../../redux/actions/pager";

function Under(){
    const dispatch = useDispatch();
    const handleSignUp=()=>{
        dispatch(pager("home-up"));
    };
    const handleSignIn=()=>{
        dispatch(pager("home-in"));
    };
    
    return(
        <div className="under-gallery">
            <div className="line">JotiaSpace lets you get the most out of the things you no longer need<hr/></div>
            <div id="space">
                <img className="moving-logo" src={logo} alt=""/>
                <div className="signature">
                    <div className="phrase">Made With Love
                        <img src={heart} alt="" className="heart deco"/>
                    </div>
                </div>
                <div className="body">
                    <p id="para" className="para">{text}</p>
                    <div className="buttons">
                        <button onClick={handleSignUp} className="press">Sign Up</button>                        
                        <button onClick={handleSignIn} className="press">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Under;

/*
<img className="cercle deco" src={cercle} alt=""/>
                <img className="square deco" src={square} alt=""/>
                <img className="triangle deco" src={triangle} alt=""/>
                <img className="cube deco" src={cube} alt=""/>
*/
import React from "react";
//import cercle from "./shapes/cercle.svg";
//import square from "./shapes/square.svg";
//import triangle from "./shapes/triangle.svg";
import heart from "./shapes/heart.svg";
//import cube from "./shapes/cube.svg";
import text from "./intro";
import logo from "./shapes/logo.svg"
import { Link } from "react-router-dom";

function Under(){
    return(
        <div className="under-gallery">
            <div className="line">JotiaSpace lets you get the most out of the things you no longer need<hr/></div>
            <div id="space">
                <img className="moving-logo" src={logo} alt=""/>
                <div className="body">
                    <p id="para" className="para">{text}</p>
                    <div className="buttons">
                        <Link to="/sign-up"><button className="press">Sign Up</button></Link>                        
                        <Link to="/sign-in"><button className="press">Sign In</button></Link>
                    </div>
                </div>
            
                
                <div className="signature">
                    <div className="phrase">Made With Love
                        <img src={heart} alt="" className="heart deco"/>
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
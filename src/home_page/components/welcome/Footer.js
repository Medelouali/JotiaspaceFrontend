import React from "react";
import {slider} from "../services/vars";
import { useSelector } from "react-redux";
import "../home.css";

function Footer(){
    const online = useSelector(state => state.online);
    if(online){
        return(
            <>
                <div className="footer">
                    <p>&copy; 2021 All Rights Are Reserved El Ouali Mohammed</p>
                </div>
                <div className="logo-intro show-letter">
                    {slider}
                </div>
            </>
        )
    }else{
        return(<></>);
    }
}

export default Footer;
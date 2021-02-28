import React from "react";
import website_logo from "../svg/logo.svg";
import Burger from "./Burger";
import "../home.css";
import { useSelector } from "react-redux";

function Header(){
    const display = useSelector(state => state.main_nav);
    if(display)
        return (
            <div className="header">
                <div className="left-half">
                    <img src={website_logo} alt="Website logo"/>
                    <form action="#">
                        <input id="search-bar" type="text" placeholder="Search..."/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <Burger/>
            </div>
        );
    else
        return(
            <div className=""></div>
        );
}

export default Header;
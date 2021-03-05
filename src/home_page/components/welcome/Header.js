import React from "react";
import website_logo from "../svg/logo.svg";
import Burger from "./Burger";
import "../home.css";

function Header(){
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
}

export default Header;
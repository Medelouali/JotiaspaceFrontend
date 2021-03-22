import React from 'react';
import "./Footer.css";
import Navigator from './navigator/Navigator';

function Footer(){
    return (
        <div className="footer-wrapper">
            <hr/>
            <p>&copy;2021 All Right Reserved, El Ouali Mohammed</p>
            <Navigator/>
        </div>
    )
}

export default Footer;

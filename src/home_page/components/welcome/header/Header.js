import React from 'react'
import "./Header.css";
import { useDispatch } from "react-redux";
import pager from '../../../../redux/actions/pager';

function Header(){
    const dispatch = useDispatch();
    return (
        <div className="header-wrapper">
            <input type="text" placeholder="JotiaSpace's search"/>
            <div className="links">
                <div className="link" onClick={()=>dispatch(pager("home"))}>Home</div>
                <div className="link" onClick={()=>dispatch(pager("home-ser"))}>Services</div>
                <div className="link" onClick={()=>dispatch(pager("home-con"))}>Contacts</div>
                <div className="link" onClick={()=>dispatch(pager("home-abo"))}>About</div>
            </div>
        </div>
    )
}

export default Header;

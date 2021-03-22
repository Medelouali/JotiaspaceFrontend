import React, { useEffect, useRef } from 'react'
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import pager from '../../../../redux/actions/pager';

function Header(){
    const dispatch = useDispatch();
    const page = useSelector(state => state.pager);
    const divRef=useRef(null);

    useEffect(() => {
        if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, [page]);

    return (
        <div ref={divRef} className="header-wrapper">
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

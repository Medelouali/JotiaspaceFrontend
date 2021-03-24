import React, { useEffect, useRef } from 'react'
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import pager from '../../../../redux/actions/pager';
import search from "../../../../store_page/components/svg/search.svg";
import go_up from "../../../../store_page/components/svg/react/arrow-up.svg";

function Header(){
    const dispatch = useDispatch();
    const page = useSelector(state => state.pager);
    const divRef=useRef(null);

    useEffect(() => {
        if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, [page]);

    const handleUp=()=>{
        if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    };

    return (
        <div ref={divRef} className="header-wrapper">
            <div className="search-query">
                <img id="search-q" src={search} alt="Search"/>
                <label htmlFor="query-s"></label>
                <input type="text" name="query" id="query-s" placeholder="Type something..."/>
            </div>

            <div className="links">
                <div className="link" onClick={()=>dispatch(pager("home"))}>Home</div>
                <div className="link" onClick={()=>dispatch(pager("home-ser"))}>Services</div>
                <div className="link" onClick={()=>dispatch(pager("home-con"))}>Contacts</div>
                <div className="link" onClick={()=>dispatch(pager("home-abo"))}>About</div>
            </div>
            <div onClick={handleUp} className="up">
                <img src={go_up} alt=""/>
            </div>
        </div>
    )
}

export default Header;

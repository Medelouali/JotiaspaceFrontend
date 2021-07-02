import React, { useEffect, useRef, useState } from 'react'
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import pager from '../../../../redux/actions/pager';
import search from "../../../../store_page/components/svg/search.svg";
import { useMedia } from "use-media";

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AddIcon from '@material-ui/icons/Add';

function Header(){
    const dispatch = useDispatch();
    const page = useSelector(state => state.pager);
    const divRef=useRef(null);
    const bigScreen=useMedia({ minWidth: "435px"});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(divRef.current) divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, [page]);

    const handleClose=()=>{
        setOpen(!open);
    };

    const switchPage=(pageName)=>{
        return ()=>{
            dispatch(pager(pageName));
            setOpen(!open);
        }
    };

    return (
        <div className="header-wrapper">
            <div className="search-query" ref={divRef}>
                <label htmlFor="query-s"></label>
                <input type="text" name="query" id="query-s" placeholder="Search..."/>
                <img id="search-q" src={search} alt="Search"/>
            </div>

            {bigScreen ? (
                <div className="links">
                    <div className="link" onClick={()=>dispatch(pager("home"))}>Home</div>
                    <div className="link" onClick={()=>dispatch(pager("home-ser"))}>Services</div>
                    <div className="link" onClick={()=>dispatch(pager("home-con"))}>Contacts</div>
                    <div className="link" onClick={()=>dispatch(pager("home-abo"))}>About</div>
                </div>
            ):(
                <div className={"card"}>
                    <div className="burger">
                        {!open ? <MenuRoundedIcon onClick={handleClose} /> : (
                            <div className={"burger-data"}>
                                <div className="openIcon">
                                    <AddIcon className={"addIcon"} onClick={handleClose} />
                                </div>
                                <div className="links-words">
                                    <div className="link-w" onClick={switchPage("home")}>Home</div>
                                    <div className="link-w" onClick={switchPage("home-ser")}>Services</div>
                                    <div className="link-w" onClick={switchPage("home-con")}>Contacts</div>
                                    <div className="link-w" onClick={switchPage("home-abo")}>About</div>                            
                                </div>    
                            </div>
                        )}
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default Header;

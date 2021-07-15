import React, { useEffect, useRef, useState } from 'react'
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import pager from '../../../../redux/actions/pager';
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
            <h1 className="web-logo">JotiaSpace</h1>
            <div className="search-bar"></div>
            {bigScreen ? (
                <div className="links">
                    <h4 className="link" onClick={()=>dispatch(pager("home"))}>Home</h4>
                    <h4 className="link" onClick={()=>dispatch(pager("home-ser"))}>Services</h4>
                    <h4 className="link" onClick={()=>dispatch(pager("home-con"))}>Contacts</h4>
                    <h4 className="link" onClick={()=>dispatch(pager("home-abo"))}>About</h4>
                </div>
            ):(
                <div className={"card"}>
                    <div className="burger">
                        {!open && <MenuRoundedIcon onClick={handleClose} /> }
                        <div className={ "burger-data" + (open? " show": "")}>
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
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default Header;

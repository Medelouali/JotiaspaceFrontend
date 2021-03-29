import React from 'react'
import { useMedia } from "use-media";
import { useDispatch, useSelector } from "react-redux";
import messanger from "../../../../redux/actions/messanger";

function Links() {
    const smallScreen=useMedia({maxWidth: "800px"});
    const dispatch=useDispatch();
    const page=useSelector(state=>state.messanger);

    const handlePager=(index)=>{
        return()=>{
            dispatch(messanger(index));
        }
    }

    const currentPage=(index)=>{
        if(index===page) return "current";
        return "";
    };

    return (
        <div className={"links" + (smallScreen ? " scroller-x": "")}>
            <h4 className={currentPage(3)} onClick={handlePager(3)}>Messages</h4>
            <h4 className={currentPage(2)} onClick={handlePager(2)}>Notifications</h4>
            <h4 className={currentPage(0)} onClick={handlePager(0)} >Friends</h4>
            <h4 className={currentPage(1)} onClick={handlePager(1)}>Invitations</h4>
        </div>
    )
}

export default Links

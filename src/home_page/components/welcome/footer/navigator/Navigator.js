import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import pager from "../../../../../redux/actions/pager";

function Navigator(){
    const page = useSelector(state => state.pager);
    const dispatch = useDispatch();
    return (
        <div className="navigator">
            <div onClick={()=>dispatch(pager("home"))} className={(page==="home" ? "selected ": "")+"dot"}></div>
            <div onClick={()=>dispatch(pager("home-ser"))} className={(page==="home-ser" ? "selected ": "")+"dot"}></div>
            <div onClick={()=>dispatch(pager("home-con"))} className={(page==="home-con" ? "selected ": "")+"dot"}></div>
            <div onClick={()=>dispatch(pager("home-abo"))} className={(page==="home-abo" ? "selected ": "")+"dot"}></div>
        </div>
    )
}

export default Navigator

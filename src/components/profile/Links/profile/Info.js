import React from 'react';
//import Manage from './Manage';
import { useDispatch } from "react-redux";
import view from "../../../../redux/actions/view";
import Intro from './Intro';

function Info() {
    const dispatch=useDispatch();
    const handleAction=(e)=>{
        dispatch(view(e.target.innerText));
    };

    return (
        <div className="info">
            <Intro/>
            <div className="go-links">
                <div onClick={handleAction} className="button">Friends</div>
                <div onClick={handleAction} className="button">Location</div>
                <div onClick={handleAction} className="button">Posts</div>
                <div onClick={handleAction} className="button">Intrests</div>
                <div onClick={handleAction} className="button">Job</div>
                <div onClick={handleAction} className="button">Analytics</div>
            </div>
            <hr/>
        </div>
    )
}
export default Info;

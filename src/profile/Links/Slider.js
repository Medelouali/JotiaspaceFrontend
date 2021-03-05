import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import pager from '../../redux/actions/pager';
import "./links.css";

function Slider(){
    const [one, setOne]=useState(false);
    const [two, setTwo]=useState(true);
    const dispatch = useDispatch();

    const handleOne=()=>{
        setOne(true);
        setTwo(false);
        dispatch(pager("store"));
    };

    const handleTwo=()=>{
        setTwo(true);
        setOne(false);
        dispatch(pager("store"));
    }
    return(
        <div className="slider">
            <div onClick={handleOne} className={`${one ? "on ": ""}sphere-1`}></div>
            <div onClick={handleTwo} className={`${two ? "on ": ""}sphere-2`}></div>
        </div>
    );
}

export default Slider;

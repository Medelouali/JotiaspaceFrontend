import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useMedia } from "use-media";
import signer from "../../../redux/actions/signer";

function Input({ label, isPassword, isEmail }) {
    const [focusOn, setFocusOn]=useState(false);
    const [field, setField]=useState("");
    const [view, setView]=useState(true);
    const smallScreen=useMedia({maxWidth: "899px"});
    const dispatch=useDispatch();

    // const handleData=async(e)=>{
    //     setField(e.target.value);
        
    // };
    useEffect(() => {
        dispatch(signer({
            key: label.toLowerCase(),
            value: field
            }));
    }, [field, label, dispatch]);
    return (
        <div className="input">
            <div className={(focusOn ? "show-yes": "show-no")}>{label}</div>
            <input onChange={(e)=>setField(e.target.value)} value={field} 
                className={ smallScreen ? "smallScreen": "bigScreen"} onFocus={()=>setFocusOn(true)} 
                type={isPassword && view ? "password": (isEmail ? "email": "text")} 
                placeholder={!focusOn ? label: ""} required/>
            {isPassword && (
                <div onClick={()=>setView(!view)} className="eye"><VisibilityIcon style={{fill: "rgb(120, 120, 241)"}}/></div>
            )}
        </div>
    )
}

Input.defaultProps={
    label: "Password",
    isPassword: false,
    isEmail: false
};
export default Input;

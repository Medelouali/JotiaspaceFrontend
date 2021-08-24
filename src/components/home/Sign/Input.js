import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { useMedia } from "use-media";
import signer from "../../../redux/actions/signer";

import { reactLocalStorage } from "reactjs-localstorage";

function Input({ label, isPassword, isEmail }) {
    const [focusOn, setFocusOn]=useState(false);
    const [field, setField]=useState(reactLocalStorage.getObject(`${label}`, "", true));
    const [view, setView]=useState(false);
    const smallScreen=useMedia({maxWidth: "899px"});
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(signer({
            key: label.toLowerCase(),
            value: field
            }));
    }, [field, label, dispatch, isPassword, isEmail]);
    return (
        <div className="input">
            <h4 className={(focusOn ? "show-yes": "show-no")}>{label}</h4>
            <input onChange={(e)=>setField(e.target.value)} 
                value={ field } 
                className={ smallScreen ? "smallScreen": "bigScreen"} onFocus={()=>setFocusOn(true)} 
                type={isPassword && view ? "password": (isEmail ? "email": "text")} 
                placeholder={!focusOn ? label: ""} required/>
            {isPassword && (
                <div onClick={()=>setView(!view)} className="eye">
                    {
                        view ? <VisibilityOffIcon style={{fill: "rgb(0, 0, 0)"}}/> : 
                        <VisibilityIcon style={{fill: "rgb(0, 0, 0)"}}/>
                    }
                </div>
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

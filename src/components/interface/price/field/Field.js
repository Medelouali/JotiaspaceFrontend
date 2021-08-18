import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import signer from "../../../../redux/actions/signer";

import "./field.css";

function Field({field_name, label}) {
    const [value, setValue]=useState("");
    const dispatch=useDispatch();

    const handleValue=(e)=>{
        setValue(e.target.value);
        dispatch(signer({key: label, value: value}));
    }
    return (
        <div className="field">
            <label className="field-label" htmlFor={field_name}>{field_name}</label>
            <textarea value={value} onChange={handleValue} 
                className="data-input" name={field_name} id={field_name} cols="30" rows="10" required></textarea>
        </div>
    )
}

export default Field;
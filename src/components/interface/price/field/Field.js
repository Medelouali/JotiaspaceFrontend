import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import signer from "../../../../redux/actions/signer";

import "./field.css";

function Field({field_name, label, dataList}) {
    const [value, setValue]=useState("");
    const dispatch=useDispatch();

    const handleValue=(e)=>{
        setValue(e.target.value);
        dispatch(signer({key: label, value: value}));
        console.loeg({key: label, value: value});
    }
    return (
        <div className="field">
            <label className="field-label" htmlFor={field_name}>{field_name}</label>
            {
                dataList===null ? <textarea value={value} onChange={handleValue} 
                className="data-input" name={field_name} id={field_name} cols="30" rows="10" required></textarea>:
                <div className="">
                    <input value={value} onChange={handleValue} type="text" id={field_name} list="CktPlayers" />  
                    <datalist id="CktPlayers">  
                        { dataList.map(category=><option value={category} key={`&${category}%`}/>) }
                    </datalist>
                </div> 

            }
        </div>
    )
}

Field.defaultProps={
    dataList: null
}
export default Field;
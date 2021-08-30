import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch } from "react-redux";
import signer from "../../../../redux/actions/signer";
import DataListInput from "react-datalist-input";

import "./field.css";

function Field({field_name, label, dataList}) {
    const [value, setValue]=useState("");
    const dispatch=useDispatch();

    const handleValue=(e)=>{
        setValue(e.target.value);
        dispatch(signer({key: label, value: value}));
    }

    const onSelect = useCallback((val) => {
        setValue(val);
        dispatch(signer({key: label, value: val.label}));
      }, [dispatch, label]);

      const items = useMemo(() =>dataList?.map((oneItem, index) => ({
          label: oneItem,
          key: index
      })),[dataList]);
    return (
        <div className="field">
            <label className="field-label" htmlFor={field_name}>{field_name}</label>
            {
                dataList===null ? <textarea value={value} onChange={handleValue} 
                className="data-input" name={field_name} id={field_name} cols="30" rows="10" required></textarea>:
                <div className="">
                    {/* <input value={value} onChange={handleValue} type="text" id={field_name} list="CktPlayers" />  
                    <datalist id="CktPlayers">  
                        { dataList.map(category=><option value={category} key={`&${category}%`}/>) }
                    </datalist> */}
                    <DataListInput
                        placeholder=""
                        items={items}
                        onSelect={onSelect}
                    />
                </div> 

            }
        </div>
    )
}

Field.defaultProps={
    dataList: null
}
export default Field;
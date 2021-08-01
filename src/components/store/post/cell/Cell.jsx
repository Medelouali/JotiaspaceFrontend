import React, { useState } from 'react';


import "./cell.css";

export default function Cell({icons, iTag, imgTag, cb, current, index}) {
    const [clicked, setClicked]=useState(false);
    const handleClicked=(cb)=>{
        return ()=>{
            setClicked(!clicked);
            cb();
        }
    };
    
    return (
        <div className="cell">
            <div onClick={handleClicked(cb)} className={"cell-icon" + (clicked ? " clicked-cell": "")}>
               {current===index ? icons[0]: icons[1]}
            </div>
            <i>{iTag}</i>
            <div className="cell-view">
                { imgTag ? imgTag: <></> }
            </div>
        </div>
    )
}

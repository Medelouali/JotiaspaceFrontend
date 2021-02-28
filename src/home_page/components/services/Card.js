import React, { useState } from "react";

function Card({icon, label, details}){
    const [open, setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    };
    return(
        <div onClick={handleOpen} className="store">
            {icon}
            <h5>{label}</h5>
            <div className="details">{open ? details: ""}</div>
        </div>
    );
}

export default Card;
import React, { useState, useRef } from "react";

import "./services.css";

function Card({icon, label, details}){
    const [open, setOpen]=useState(false);

    const ref=useRef(null);

    const handleOpen=()=>{
        setOpen(!open);
        if(ref.current && open) ref.current.scrollIntoView({behavior: "smooth", block: "start"});
    };

    return(
        <div ref={ref} onClick={handleOpen} className="store-section">
            {icon}
            <h3>{label}</h3>
            <div className="details">{open ? details: ""}</div>
        </div>
    );
}

export default Card;
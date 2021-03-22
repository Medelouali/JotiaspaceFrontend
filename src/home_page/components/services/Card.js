import React, { useState, useRef, useEffect } from "react";
import "./services.css";

function Card({icon, label, details}){
    const [open, setOpen]=useState(false);
    const ref=useRef(null);

    const handleOpen=()=>{
        setOpen(!open);
    };

    useEffect(() => {
        if(ref.current) ref.current.scrollIntoView({behavior: "smooth", block: "center"});
    }, [open]);

    return(
        <div ref={ref} onClick={handleOpen} className="store">
            {icon}
            <h5>{label}</h5>
            <div className="details">{open ? details: ""}</div>
        </div>
    );
}

export default Card;
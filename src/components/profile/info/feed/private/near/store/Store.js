import React, { useState, useRef } from 'react';
import "./store.css";

function Store({logo, title, jsx_details}) {
    const [show, setShow] = useState(false);
    const divRef=useRef(null);

    const handleShow=()=>{
        setShow(!show);
        if(divRef.current && show)
            divRef.current.scrollIntoView({behavior: "smooth", block: "end"});
    };

    return (
        <div ref={divRef} className="store">
            <div onClick={handleShow} className="img">{logo}</div>
            <h4 onClick={handleShow} className={show ? "selected": ""}>{title}</h4>
            <div className="details">
                { show ? jsx_details: null}
            </div>
        </div>
    );
};

export default Store;

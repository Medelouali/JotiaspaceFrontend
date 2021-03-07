import React, { useState } from 'react';


function Store({logo, title, jsx_details}) {
    const [show, setShow] = useState(false);

    const handleShow=()=>{
        setShow(!show);
    };

    return (
        <div className="store">
            <img onClick={handleShow} src={logo} alt=""/>
            <h4 onClick={handleShow} className={show ? "selected": ""}>{title}</h4>
            <div  className="details">
                { show ? jsx_details: null}
            </div>
        </div>
    );
};

export default Store;

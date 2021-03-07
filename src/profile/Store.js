import React, { useState, useRef, useEffect } from 'react';


function Store({logo, title, jsx_details}) {
    const [show, setShow] = useState(false);
    const ref=useRef(null);

    const handleShow=()=>{
        setShow(!show);
    };

    useEffect(() => {
        if(ref.current)ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [show])
    return (
        <div className="store">
            <img onClick={handleShow} src={logo} alt=""/>
            <h4 onClick={handleShow} className={show ? "selected": ""}>{title}</h4>
            <div ref={ref} className="details">
                { show ? jsx_details: null}
            </div>
        </div>
    );
};

export default Store;

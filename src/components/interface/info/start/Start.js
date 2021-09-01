import React, { useRef, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core';
import "./start.css";

function Start({start, phrase}) {
    const divRef=useRef(null);
    useEffect(() => {
        if(divRef.current) divRef.current.scrollIntoView({ behavior: "smooth", block: "end"});
    }, []);
    if(start){
        return (
            <div className="posting">
                <div ref={divRef} className="posting-icon">
                    <CircularProgress/>    
                </div>
                <div className="phrase">{phrase}</div>            
            </div>
        )
    }else{
        return(<></>);
    }
}

Start.defaultProps={
    start: false,
    phrase: ""
}
export default Start

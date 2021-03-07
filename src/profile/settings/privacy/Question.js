import React, { useState, useEffect, useRef } from 'react';
import Choices from './Choices';

function Question({question}){
    const [on, setOn] = useState(false);
    const handleOn=()=>{
        setOn(!on);
    }

    const ref=useRef(null);
    useEffect(() => {
        if(ref.current)ref.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, [on]);

    return (
        <div className="question">
            <div onClick={handleOn} className="part">{question}</div>
            <div ref={ref} className="">
                <Choices on={on}/>
            </div>
        </div>
    )
}

export default Question;

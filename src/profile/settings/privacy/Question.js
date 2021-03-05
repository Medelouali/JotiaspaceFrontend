import React, { useState } from 'react';
import Choices from './Choices';

function Question({question}){
    const [on, setOn] = useState(false);
    const handleOn=()=>{
        setOn(!on);
    }
    return (
        <div className="question">
            <div onClick={handleOn} className="part">{question}</div>
            <Choices on={on}/>
        </div>
    )
}

export default Question;

import React, { useRef, useEffect } from 'react';

function Choices({on}) {
    const divRef=useRef(null);
    useEffect(()=>{
        if(divRef.current){
            divRef.current.scrollIntoView({behavior: "smooth", block: "end"});
        }else{
            console.log(divRef);
        };
    });
    if(on){
        
        return (
            <div ref={divRef} className="choices">
                <div className="nothing"></div>
                <div className="options">
                    <label htmlFor="question-1">
                        <input type="radio" name="question" id="question-1" value="Only Me"/>
                        Only Me
                    </label>

                    <label htmlFor="question-2">
                        <input type="radio" name="question" id="question-2" value="Only Me And My Friends"/>
                        Only Me And My Friends
                    </label>

                    <label htmlFor="question-3">
                        <input type="radio" name="question" id="question-3" value="Public"/>
                        Only Me
                    </label>
                </div>
            </div>
        );
    }else{
        return(
            <div className=""></div>
        );
    }
}

export default Choices;

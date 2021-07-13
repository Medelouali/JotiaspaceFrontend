import React, { useRef, useState, useEffect } from "react";
import Reply from "../messanger/message/Reply";

function ScrollerY({list}){
    const [sublist, setSublist]=useState(list.slice(0, 4));
    const handleMore=()=>{
        setSublist(list.slice(0, sublist.length+2));
    };
    const divRef=useRef(null);
    
    const go_down=()=>{
        divRef.current.scrollIntoView({behavior: "smooth", block: "end"});
    };
    useEffect(()=>{
        divRef.current.scrollIntoView({behavior: "smooth", block: "end"});
    }, []);

    return(
        <div className="scroller-y">
            <div className="see-more">
                {sublist.length!==list.length ? <svg id="see-more-1" onClick={handleMore} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="blue" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>:<svg id="see-more-2" onClick={go_down} aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-minimize" className="svg-inline--fa fa-window-minimize fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="blue" d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg>}
            </div>
            <div className="messanger-wrapper">
                {sublist.map((mess, index)=>(
                    <Reply key={`${index}#${index}`} sender_flag={Object.keys(mess)[0]} talk={mess[Object.keys(mess)[0]]}/>
                ))}
                <form action="#">
                    <div className="new-message">
                        <textarea name="" id=""></textarea>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" className="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="blue" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                    </div>
                </form>
                <div ref={divRef} className=""></div>
            </div>
        </div>
    );
}

ScrollerY.defaultProps={
    list:[
        {"Me": "Hi There how are u today?!"}, 
        {"Him": "Hello my friend I am good u?"},
        {"Me": "Miss U! I ve been alone for so long now..."},
        {"Me": "Hi There how are u today?!"}, 
        {"Him": "Hello my friend I am good u?"},
        {"Me": "Miss U! I ve been alone for so long nowww..."},
        {"Me": "Hi There how are u today?!"}, 
        {"Him": "Hello my friend I am good u?"},
        {"Me": "Miss U! I ve been alone for so long now..."}
    ]
}

export default ScrollerY;
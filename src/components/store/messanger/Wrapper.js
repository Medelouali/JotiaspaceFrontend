import React from 'react'
import Links from "./messages/Links";
import { useMedia } from "use-media";
import "./messanger.css";

function Wrapper({jsx}) {
    const smallScreen=useMedia({maxWidth: "800px"});
    
    return (
        <div className="mess-container">
            <div className="mess">
                <div className={smallScreen ? "scroller-y" : ""}>
                    <Links/>
                    <div className="show-it">
                        {jsx}
                    </div>
                </div>
            </div>
        </div>
    )
}

Wrapper.defaultProps={
    jsx: <div className=""></div>
}
export default Wrapper;
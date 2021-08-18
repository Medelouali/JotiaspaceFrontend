import React from 'react'
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import "./start.css";

function Start({start, phrase}) {
    if(start){
        return (
            <div className="posting">
                <div className="posting-icon">
                    <CachedRoundedIcon/>    
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

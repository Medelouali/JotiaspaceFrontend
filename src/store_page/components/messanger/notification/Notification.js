import React from 'react';
import "./notification.css";

function Notification({image, jsx}) {
    return (
        <>
            <div className="notification"> 
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="jsx">
                    {jsx}
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Notification;

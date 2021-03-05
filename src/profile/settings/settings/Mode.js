import React from 'react';
import "../settings.css";

function Mode(){
    return (
        <div className="mode">
               <div className="title">Browsing Mode</div>
               <div className="theme">
                    <div className="empty"></div>
                    <div className="choose">
                        <div className="light">Light</div>
                        <div className="dark">Dark</div>
                    </div>
                </div>         
        </div>
    )
}

export default Mode;

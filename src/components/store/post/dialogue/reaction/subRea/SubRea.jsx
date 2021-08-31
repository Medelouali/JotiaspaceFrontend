import React from 'react';
import "./subRea.css";

export default function SubRea({re_image, re_name, re_logo, word}) {
    return (
        <div className="reaction">
            <div className="reacter">
                <div className="reacter-image">
                    <img src={re_image} alt="Reacter"/>
                </div>
                <p>{re_name}</p>
                <div className="reacter-logo">
                    {re_logo}
                </div>
            </div>
            <p>{word}</p>
        </div>
    )
}

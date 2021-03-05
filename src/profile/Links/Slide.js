import React from 'react';

function Slide({label, info}) {
    return (
        <div className="slide">
            <div className="label">{label}</div>
            <div className="info">{info}</div>
        </div>
    )
}

export default Slide;

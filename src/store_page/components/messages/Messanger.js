import React from 'react';
import "./messanger.css";

function Messanger({activeApp}) {
    return (
        <div className="messanger">Messanger App</div>
    )
}

Messanger.defaultProps={
    activeApp: -1
};
export default Messanger;
import React from 'react';

function InlineCard({icon, label}){
    return (
        <div className="inline-card">
            {icon}
            <h5>{label}</h5>
        </div>
    )
}

export default InlineCard;

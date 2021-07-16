import React from 'react';

function InlineCard({icon, linkTo}){
    return (
        <a href={linkTo} className="inline-card">
            {icon}
        </a>
    )
}

export default InlineCard;

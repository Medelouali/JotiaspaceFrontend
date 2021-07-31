import React from 'react'

function Inv({name}) {
    return (
        <div className="inv">
            <h6>{name}</h6>
            <div className="accept-refuse">
                <button className="accept">Accept</button>
                <button className="refuse">Refuse</button>
            </div>
        </div>
    )
}

export default Inv

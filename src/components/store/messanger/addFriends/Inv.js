import React from 'react'
import { Button } from "@material-ui/core";

function Inv({name}) {
    return (
        <div className="inv">
            <h4>{name}</h4>
            <div className="accept-refuse">
                <Button className="accept" variant="contained" color="primary"
                    size="small">
                    Accept
                </Button>
                <Button className="refuse" variant="contained" color="primary"
                    size="small">
                    Reject
                </Button>
            </div>
        </div>
    )
}

export default Inv

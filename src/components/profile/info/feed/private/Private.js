import React from 'react';
import local from "../../../../home/svg/local.svg";
import global from "../../../svg/world.svg";

import Near from './near/Near';
import Settings from './settings/Settings';

import "./private.css";

function Private({settings}) {
    return (
        <div className="outer-Private">
            <div className="Private">
                <Near title="Near" logo={local}/>
                <hr/>
                <hr/>
                <Near title="Global" logo={global}/>
                <hr/>
                <hr/>
                { settings ? <Settings/>: <></>}
            </div>
        </div>
    )
}

Private.defaultProps={
    settings: true
}

export default Private;

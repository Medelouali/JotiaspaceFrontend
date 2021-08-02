import React from 'react';

import Near from './near/Near';
import Settings from './settings/Settings';

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

import "./private.css";

function Private({settings}) {
    return (
        <div className="outer-Private">
            <div className="Private">
                <Near title="Near" logo={<RoomOutlinedIcon/>}/>
                <hr/>
                <hr/>
                <Near title="Global" logo={<LanguageOutlinedIcon/>}/>
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

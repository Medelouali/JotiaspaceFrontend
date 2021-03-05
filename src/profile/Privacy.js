import React from 'react';
import Near from './Near';
import local from "../home_page/components/svg/local.svg";
import global from "./svg/world.svg";
import Settings from './Settings';

function Privacy() {
    return (
        <div className="outer-privacy">
            <div className="privacy">
                <Near title="Near" logo={local}/>
                <hr/>
                <hr/>
                <Near title="Global" logo={global}/>
                <hr/>
                <hr/>
                <Settings/>
            </div>
        </div>
    )
}

export default Privacy;

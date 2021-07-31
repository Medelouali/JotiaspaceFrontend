import React from 'react';
import privacy from "../../../../svg/privacy.svg";
import settings from "../../../../svg/settings.svg";

import Store from '../near/store/Store';
import Privacy from "./privacy/Privacy";
import Setting from "./settings/Settings";

import "./settings.css";

function Settings() {
    return (
        <div className="settings-privacy">
            <Store title="Privacy" logo={privacy} jsx_details={<Privacy/>}/>            
            <Store title="Settings" logo={settings} jsx_details={<Setting/>}/>            
        </div>
    )
}

export default Settings;

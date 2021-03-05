import React from 'react';
import Store from './Store';
import privacy from "./svg/privacy.svg";
import settings from "./svg/settings.svg";
import "./settings/settings.css";
import Privacy from "./settings/privacy/Privacy";
import Setting from "./settings/settings/Settings";

function Settings() {
    return (
        <div className="settings-privacy">
            <Store title="Privacy" logo={privacy} jsx_details={<Privacy/>}/>            
            <Store title="Settings" logo={settings} jsx_details={<Setting/>}/>            
        </div>
    )
}

export default Settings;

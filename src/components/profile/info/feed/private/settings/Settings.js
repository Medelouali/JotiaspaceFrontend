import React from 'react';
import Store from '../near/store/Store';
import Privacy from "./privacy/Privacy";
import Setting from "./settings/Settings";

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import "./settings.css";

function Settings() {
    return (
        <div className="settings-privacy">
            <Store title="Privacy" logo={<LockOutlinedIcon/>} jsx_details={<Privacy/>}/>            
            <Store title="Settings" logo={<SettingsOutlinedIcon/>} jsx_details={<Setting/>}/>            
        </div>
    )
}

export default Settings;

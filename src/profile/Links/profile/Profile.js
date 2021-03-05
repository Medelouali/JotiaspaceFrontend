import React from 'react';
import Account from './Account';
import "./profile.css";

function Profile() {
    return (
        <div className="outer-account">
            <div className="account">
                <Account/>
            </div>
        </div>
    )
}

export default Profile;

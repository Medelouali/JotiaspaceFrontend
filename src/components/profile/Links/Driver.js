import React from 'react';
//import Message from './message/Message';
import Profile from './profile/Profile';

function Driver({go}){
    switch(go){
        case "message":
            // return(<Message/>);
            return<></>;
        case "profile":
            return(<Profile/>);
        default:
            return(<div className=""></div>);
    };
}

export default Driver;
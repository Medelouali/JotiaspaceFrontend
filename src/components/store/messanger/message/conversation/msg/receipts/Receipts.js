import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import NotInterestedIcon from '@material-ui/icons/NotInterested';

import "./receipts.css";

function Receipts({sent, received, viewed}) {
    if(sent===false) return <div className="sent-msg"><NotInterestedIcon/></div>;
    if(received===false) return <div className="received-msg"><CheckIcon/></div>;
    return <div className={viewed===true ? "viewed-r": "no-viewed-r"}><DoneAllIcon/></div>;
}

export default Receipts;

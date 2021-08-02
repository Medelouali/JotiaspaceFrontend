import React from 'react';
import Friend from '../../../network/friend/Friend';
import person from "../../../../../svg/animals/crow.svg";
import "./profile.css";

function More({name}){
    return (
        <div className="more">
            <h4>{name}'s network</h4>
            <Friend picture={person} name="Ali" jsx=""/>
            <Friend picture={person} name="Ali" jsx=""/>
            <Friend picture={person} name="Ali" jsx=""/>
            <Friend picture={person} name="Ali" jsx=""/>
            <Friend picture={person} name="Ali" jsx=""/>
        </div>
    )
}

export default More;

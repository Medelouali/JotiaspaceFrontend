import React from 'react';
import Friend from '../../Friend';
import person from "../svg/mark.webp";
import "../../profile.css";

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

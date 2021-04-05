import React from "react";
import Notification from "../notification/Notification";
import fluffy from "../../svg/fluffy.jpg";

import "./addFriends.css";
import Inv from "./Inv";

export default function AddFriends(){

    return(
        <div className="add-friends">
            <Notification image={fluffy} jsx={<Inv name="Gabreal"/>}/>
            <Notification image={fluffy} jsx={<Inv name="Gabreal"/>}/>
            <Notification image={fluffy} jsx={<Inv name="Gabreal"/>}/>
            <Notification image={fluffy} jsx={<Inv name="Gabreal"/>}/>
            <Notification image={fluffy} jsx={<Inv name="Gabreal"/>}/>
            <Notification image={fluffy} jsx={<Inv name="Gabreal"/>}/>
            <Notification image={fluffy} jsx={<Inv name="Gabreal"/>}/>
        </div>
    )
}
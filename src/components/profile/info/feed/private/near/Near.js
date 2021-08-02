import React from 'react';
import Store from './store/Store';
import Collection from "./collection/Collection";

import car from "../../../../svg/transport/car.svg";
import house from "../../../../svg/properties/house.svg";
import horse from "../../../../svg/animals/horse.svg";
import pc from "../../../../svg/electronics/pc.svg";
import apps from "../../../../svg/apps/apps.svg";
import clothings from "../../../../svg/clothings/tshirt.svg";
import collections from "../../../../vars.js";

import "./near.css";

function Near({title, logo}) {
    return (
        <div className="near">
            <div className="near-head">
                <h3>{title}</h3>
                <div className="near-logo">{logo}</div>
            </div>
            <hr/>
            <Store logo={car} title="Transport" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "transport",
                list: collections.transport
                }}/>}/>
            <Store logo={house} title="Properties" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "properties",
                list: collections.properties
                }}/>}/>
            <Store logo={pc} title="Electronics" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "electronics",
                list: collections.electronics
                }}/>}/>
            <Store logo={horse} title="animals" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "animals",
                list: collections.animals
                }}/>}/>
            <Store logo={clothings} title="Clothings" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "clothings",
                list: collections.clothings
                }}/>}/>
            <Store logo={apps} title="Apps" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "apps",
                list: collections.apps
                }}/>}/>
        </div>
    )
}

export default Near;

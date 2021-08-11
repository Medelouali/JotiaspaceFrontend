import React from 'react';
import Store from './store/Store';
import Collection from "./collection/Collection";

// import car from "../../../../svg/transport/car.svg";
// import house from "../../../../svg/properties/house.svg";
// import horse from "../../../../svg/animals/horse.svg";
// import pc from "../../../../svg/electronics/pc.svg";
// import apps from "../../../../svg/apps/apps.svg";
// import clothings from "../../../../svg/clothings/tshirt.svg";
import collections from "../../../../vars.js";

import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined';

import "./near.css";

function Near({title, logo}) {
    return (
        <div className="near">
            <div className="near-head">
                <h3>{title}</h3>
                <div className="near-logo">{logo}</div>
            </div>
            <hr/>
            <Store logo={<DriveEtaOutlinedIcon/>} title="Transport" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "transport",
                list: collections.transport
                }}/>}/>
            <Store logo={<HomeOutlinedIcon/>} title="Properties" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "properties",
                list: collections.properties
                }}/>}/>
            <Store logo={<DesktopWindowsOutlinedIcon/>} title="Electronics" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "electronics",
                list: collections.electronics
                }}/>}/>
            <Store logo={<PetsOutlinedIcon/>} title="animals" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "animals",
                list: collections.animals
                }}/>}/>
            <Store logo={<AccessibilityOutlinedIcon/>} title="Clothings" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "clothings",
                list: collections.clothings
                }}/>}/>
            <Store logo={<DeveloperModeOutlinedIcon/>} title="Apps" jsx_details={<Collection coordinates={{
                cath: title.toLowerCase(),
                type: "apps",
                list: collections.apps
                }}/>}/>
        </div>
    )
}

export default Near;

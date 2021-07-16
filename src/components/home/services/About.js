import React from "react";
import Card from "./Card";
import { whoAmI_label, whoAmI_details, goal_label, goal_details} from "./vars" 
import "./services.css";

import GroupIcon from '@material-ui/icons/Group';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

function About(){

    return(
        <div className="services">
            <div className="globe-short">
                <Card icon={<GroupIcon/>} label={whoAmI_label} details={whoAmI_details}/>
                <Card icon={<HighlightOffOutlinedIcon/>} label={goal_label} details={goal_details}/>
            </div>
        </div>
    );
};

export default About;
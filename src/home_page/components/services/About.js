import React from "react";
import Card from "./Card";
import { whoAmI_label, whoAmI_details, goal_label, goal_details} from "./vars" 
import "./services.css";

import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

function About(){

    return(
        <div className="services">
            <div className="globe">
                <Card icon={<PersonOutlinedIcon/>} label={whoAmI_label} details={whoAmI_details}/>
                <Card icon={<HighlightOffOutlinedIcon/>} label={goal_label} details={goal_details}/>
            </div>
        </div>
    );
};

export default About;
import React from "react";
import Card from "./Card";
import {whoAmI, whoAmI_label, whoAmI_details, goal, goal_label, goal_details} from "./vars" 


function About(){

    return(
        <div className="services">
            <div className="globe">
                <Card icon={whoAmI} label={whoAmI_label} details={whoAmI_details}/>
                <Card icon={goal} label={goal_label} details={goal_details}/>
            </div>
        </div>
    );
};

export default About;
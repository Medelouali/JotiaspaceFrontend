import React from "react";
import InlineCard from "./InlineCard";

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

function Contact(){

    return(
        <div className="services">
            <div className="globe">
                <InlineCard icon={<FacebookIcon/>} linkTo="#"/>
                <InlineCard icon={<LinkedInIcon/>} linkTo="#"/>
                <InlineCard icon={<TwitterIcon/>} linkTo="#"/>
                <InlineCard icon={<EmailIcon/>} linkTo="#"/>
            </div>
        </div>
    );
}

export default Contact;
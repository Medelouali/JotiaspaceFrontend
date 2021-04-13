import React from "react";
import InlineCard from "./InlineCard";
import {
        facebook_label,
        linkedIn_label,
        twitter_label,
        gmail_label, 
        } from "./vars";

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

function Contact(){

    return(
        <div className="services">
            <div className="inline-globe">
                <InlineCard icon={<FacebookIcon/>} label={facebook_label}/>
                <InlineCard icon={<LinkedInIcon/>} label={linkedIn_label}/>
                <InlineCard icon={<TwitterIcon/>} label={twitter_label}/>
                <InlineCard icon={<EmailIcon/>} label={gmail_label}/>
            </div>
        </div>
    );
}

export default Contact;
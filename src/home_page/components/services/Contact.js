import React from "react";
import InlineCard from "./InlineCard";
import {
        facebook, facebook_label,
        linkedIn, linkedIn_label,
        twitter, twitter_label,
        gmail, gmail_label, 
        } from "./vars";
        
function Contact(){

    return(
        <div className="services">
            <div className="inline-globe">
                <InlineCard icon={facebook} label={facebook_label}/>
                <InlineCard icon={linkedIn} label={linkedIn_label}/>
                <InlineCard icon={twitter} label={twitter_label}/>
                <InlineCard icon={gmail} label={gmail_label}/>
            </div>
        </div>
    );
}

export default Contact;
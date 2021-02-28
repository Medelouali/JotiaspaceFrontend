import React from "react";
import Card from "./Card";
import {
        facebook, facebook_label,
        linkedIn, linkedIn_label,
        twitter, twitter_label,
        gmail, gmail_label, gmail_details
        } from "./vars";
function Contact(){

    return(
        <div className="services">
            <div className="globe">
                <Card icon={facebook} label={facebook_label} details=""/>
                <Card icon={linkedIn} label={linkedIn_label} details=""/>
                <Card icon={twitter} label={twitter_label} details=""/>
                <Card icon={gmail} label={gmail_label} details={gmail_details}/>
            </div>
        </div>
    );
}

export default Contact;
import React from "react";
import fluffy from "../../../svg/fluffy.jpg";
import like from "../../../svg/react/like.svg";

import "./reaction.css";
import SubRea from "./subRea/SubRea";

export default function Reaction({reacters}){
    return(
        <div className="reactions">
            <div className="reaction-list">
                {reacters.map((reacter, index_1)=>(
                    reacter.re_words.map((word, index_2)=>(
                        <SubRea re_image={reacter.re_image} re_name={reacter.re_name} re_logo={reacter.re_logo} 
                        word={word}  key={`${index_1}${word}#${index_2}`}/>
                    ))
                ))}
            </div>
        </div>
    );
}

Reaction.defaultProps={
    reacters:[
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]},
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]},
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]},
        {re_image: fluffy, re_name: "Fluffy", re_logo: like, re_words:["You are Dope", "Awesome"]}
    ]
}




import React from "react";
import fluffy from "../../../svg/fluffy.jpg";
import like from "../../../svg/react/like.svg";

import "./reaction.css";

export default function Reaction({reacters}){
    return(
        <div className="reactions">
            <div className="reaction-list">
                {reacters.map((reacter, index_1)=>(
                    reacter.re_words.map((word, index_2)=>(
                        <div className="reaction" key={`${index_1}${word}#${index_2}`}>
                            <div className="reacter">
                                <div className="reacter-image">
                                    <img src={reacter.re_image} alt="Reacter"/>
                                </div>
                                <h5>{reacter.re_name}</h5>
                                <div className="reacter-logo">
                                    {reacter.re_logo}
                                </div>
                            </div>
                            <p>{word}</p>
                        </div>
                    ))
                ))}
                <hr/>
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




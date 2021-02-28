import React from 'react';
import three_dots from "./svg/three-dots.svg";

function Detail({header, info}){
    return(
        <div className="outer-detail">
            <div className="detail">
                <h5>{header}</h5>
                <img src={three_dots} alt="expand-dots"/>
                <p>{info}</p>
            </div>
        </div>
    );
}

Detail.defaultProps={
    header: "Posting A Product",
    info: "Posting products let people know u and gain the trust of clients"
};

export default Detail;
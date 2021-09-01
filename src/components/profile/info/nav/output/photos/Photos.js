import React from 'react';
import "./photos.css";

//just for testing
const girl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

function Photos() {
    return (
        <div className="photos">
            <img src={girl} alt=""/>            
            <img src={girl} alt=""/>            
            <img src={girl} alt=""/>            
            <img src={girl} alt=""/>            
            <img src={girl} alt=""/>            
            <img src={girl} alt=""/>            
            <img src={girl} alt=""/>            
            <img src={girl} alt=""/>            
        </div>
    )
}

export default Photos;

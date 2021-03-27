import React from 'react'
//import  ScrollerX  from "../store_page/components/scrollers/ScrollerX";
import Latest from './Latest';
import Slider from './Links/Slider';
//import Output from './Output';
import Bill from "./svg/Bill.jpg";
//import { useSelector } from "react-redux";

const images=[
    <img className="clip" src={Bill} alt=""/>,
    <img className="clip" src={Bill} alt=""/>,
    <img className="clip" src={Bill} alt=""/>,
    <img className="clip" src={Bill} alt=""/>,
    <img className="clip" src={Bill} alt=""/>
];
function Browser({name}) {

    return (
        <div className="browser">
            <h3>{name}</h3>
            <p>I am the CEO of Facebook Inc</p>
            {/* <ScrollerX clips={images}/> */}
            <hr/>
            <Latest/>
            <Slider/>
        </div>
    )
}

export default Browser

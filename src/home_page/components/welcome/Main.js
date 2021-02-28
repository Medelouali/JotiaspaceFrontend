import React from "react";
import Gallery from "./Gallery";
import Under from "./Under";
import Footer from "./Footer";

function Main(){
    return(
        <div id="main" className="main">
            <Gallery/>
            <Under/>
        </div>
    );
}

export default Main;
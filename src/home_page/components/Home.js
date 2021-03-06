import React from "react";
//import {BrowserRouter as Router ,Switch, Route} from "react-router-dom";
import Header from "./welcome/Header";
import Main from "./welcome/Main";
import Contact from "./services/Contact";
import Footer from "./welcome/Footer";
import Service from "./services/Service";
import About from "./services/About";
import SignUp from "./Sign/SignUp";
import SignIn from "./Sign/SignIn";

import "./home.css";

function Home({page}){
    return(
        <div className="whole">
            <Header/>
            <Base page={page}/>
            <Footer/>
        </div>
    );
}

const Base=({page})=>{
    switch(page){
        case "home-up":
            return(
                <SignUp/>
            );
        case "home-in":
            return(
                <SignIn/>
            );
        case "home-ser":
            return(
                <Service/>
            );
        case "home-abo":
            return(
                <About/>
            );
        case "home-con":
            return(
                <Contact/>
            );
        default:
            return(
                <Main/>
            );
    }
}


Home.defaultProps={
    page: ""
};
export default Home;
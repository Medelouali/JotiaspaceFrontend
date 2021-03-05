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


const Home=({page})=>{
    switch(page){
        case "home-up":
            return(
                <div className="whole">
                    <Header/>
                    <SignUp/>
                    <Footer/>
                </div>
            );
        case "home-in":
            return(
                <div className="whole">
                    <Header/>
                    <SignIn/>
                    <Footer/>
                </div>
            );
        case "home-ser":
            return(
                <div className="whole">
                    <Header/>
                    <Service/>
                    <Footer/>
                </div>
            );
        case "home-abo":
            return(
                <div className="whole">
                    <Header/>
                    <About/>
                    <Footer/>
                </div>
            );
        case "home-con":
            return(
                <div className="whole">
                    <Header/>
                    <Contact/>
                    <Footer/>
                </div>
            );
        default:
            return(
                <div className="whole">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            );
    }
}

Home.defaultProps={
    page: ""
};
export default Home;
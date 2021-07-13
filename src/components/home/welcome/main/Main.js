import React from 'react';
import "./Main.css";
import Welcome from './welcome/Welcome';
import SignUp from "../../Sign/SignUp";
import SignIn from "../../Sign/SignIn";
import About from "../../services/About";
import Services from "../../services/Service";
import Contacts from "../../services/Contact";

function Main({page}) {
    switch (page) {
        case "home":
            return <Welcome/>
        case "home-in":
            return <SignIn/>
        case "home-up":
            return <SignUp/>
        case "home-abo":
            return <About/>
        case "home-ser":
            return <Services/>
        case "home-con":
            return <Contacts/>
        default:
            return <div className="">No route...</div>;
    }
}

Main.defaultProps={
    page: "home"
}
export default Main;

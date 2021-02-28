import React from "react";
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom";
import Header from "./welcome/Header";
import Main from "./welcome/Main";
import Contact from "./services/Contact";
import Footer from "./welcome/Footer";
import Service from "./services/Service";
import About from "./services/About";
import SignUp from "./Sign/SignUp";
import SignIn from "./Sign/SignIn";
import "./home.css";


const Home=()=>{
    
    return(
        <Router>
            <div className="home">
                <Header/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/services" component={Service}/>
                        <Route exact path="/about-us" component={About}/>
                        <Route exact path="/contact-us" component={Contact}/>
                        <Route exact path="/sign-up" component={SignUp}/>
                        <Route exact path="/sign-in" component={SignIn}/>
                    </Switch>
                <Footer/>
            </div>
        </Router>
    );
}
export default Home;
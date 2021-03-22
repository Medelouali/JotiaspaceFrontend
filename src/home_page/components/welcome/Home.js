import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from "./footer/Footer";
import "./home.css";

function Home({page}){
    return(
        <div className="welcome">
            <Header/>
            <div className="main-section">
                <Main page={page}/>
            </div>
            <Footer/>
        </div>
    )
}
Home.defaultProps={
    page: "home"
};
export default Home;

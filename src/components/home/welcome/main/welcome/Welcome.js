import React from 'react';
import { useDispatch } from "react-redux";
import intro from "../../../svg/vars/vars";
import pager from '../../../../../redux/actions/pager';

import { Button } from "@material-ui/core";

import "./welcome.css";

//some images from pintrest:
import clothes_1 from "../../../Sign/svg/Pins/clothes-1.jpg";
import girl_1 from "../../../Sign/svg/Pins/girl-1.jpg";
import girl_2 from "../../../Sign/svg/Pins/girl-2.jpg";
import guy_1 from "../../../Sign/svg/Pins/guy-1.jpg";
import guy_2 from "../../../Sign/svg/Pins/guy-2.jpg";
import forn_1 from "../../../Sign/svg/Pins/forn-1.jpg";
import forn_2 from "../../../Sign/svg/Pins/forn-2.jpg";
import forn_3 from "../../../Sign/svg/Pins/forn-3.jpg";
import house_1 from "../../../Sign/svg/Pins/house-1.jpg";
import car_1 from "../../../Sign/svg/Pins/car-1.jpg";
import car_2 from "../../../Sign/svg/Pins/car-2.jpg";
import car_3 from "../../../Sign/svg/Pins/car-3.jpg";

function Welcome(){
    const dispatch = useDispatch();
    return (
        <div className="welcome-wrapper">
            <div className="products-list">
                <img src={clothes_1} alt="Product Model"/>
                <img src={house_1} alt="Product Model"/>
                <img src={girl_1} alt="Product Model"/>
                <img src={girl_2} alt="Product Model"/>
                <img src={guy_1} alt="Product Model"/>
                <img src={guy_2} alt="Product Model"/>
                <img src={car_1} alt="Product Model"/>
                <img src={car_2} alt="Product Model"/>
                <img src={car_3} alt="Product Model"/>
                <img src={forn_1} alt="Product Model"/>
                <img src={forn_2} alt="Product Model"/>
                <img src={forn_3} alt="Product Model"/>
            </div>
            <div className="intro-section">
                <h3 className="intro">{intro}</h3>
                <div className="buttons">
                        <Button onClick={()=>dispatch(pager("home-up"))} variant="contained" color="primary"
                                    size="small">
                                    Sign Up
                        </Button>
                        <Button onClick={()=>dispatch(pager("home-in"))} variant="contained" color="primary"
                            size="small">
                            Sign In
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;

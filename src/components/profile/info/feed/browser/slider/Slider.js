import React from 'react';
import { useDispatch } from "react-redux";
import pager from '../../../../../../redux/actions/pager';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import "./slider.css";

function Slider({where, label}){
    const dispatch = useDispatch();

    return(
        <div className="slider">
            <div className="routes" onClick={()=>dispatch(pager(where))}>
                <ExitToAppIcon/>
                <h4>{label}</h4>
            </div>
        </div>
    );
}

Slider.defaultProps={
    where: "store",
    label: "Home"
}
export default Slider;

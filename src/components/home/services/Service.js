import React from "react";
import Card from "./Card";
import { store_label, shopping_label, local_label,
        web_label, store_details, shopping_details, local_details, web_details} from "./vars";
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';

function Service(){
    return(
        <div className="services">
            <div className="globe">
                <Card icon={<StorefrontIcon/>} label={store_label} details={store_details}/>
                <Card icon={<ShoppingCartOutlinedIcon/>} label={shopping_label} details={shopping_details}/>
                <Card icon={<RoomOutlinedIcon/>} label={local_label} details={local_details}/>
                <Card icon={<DeveloperModeOutlinedIcon/>} label={web_label} details={web_details}/>
            </div>
        </div>
    )
}

export default Service;
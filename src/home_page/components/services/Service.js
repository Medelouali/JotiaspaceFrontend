import React from "react";
import Card from "./Card";
import {store, shopping, local, web, store_label, shopping_label, local_label,
        web_label, store_details, shopping_details, local_details, web_details} from "./vars";
        
function Service(){
    return(
        <div className="services">
            <div className="globe">
                <Card icon={store} label={store_label} details={store_details}/>
                <Card icon={shopping} label={shopping_label} details={shopping_details}/>
                <Card icon={local} label={local_label} details={local_details}/>
                <Card icon={web} label={web_label} details={web_details}/>
            </div>
        </div>
    )
}

export default Service;
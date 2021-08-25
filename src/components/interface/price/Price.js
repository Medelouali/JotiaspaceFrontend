import React from 'react';
import Field from "./field/Field";

import "./price.css";

function Price() {
    return (
        <div className="price-wrapper">
            <h3>Put A Price For Your Product</h3>
            <Field field_name="Product Category" label="category"/>
            <Field field_name="Country/City" label="countryCity"/>
            <Field field_name="Product Name" label="productName"/>
            <Field field_name="Last Price(USD)" label="lastPrice"/>
            <Field field_name="Items Number/Quantity" label="itemsNumber"/>            
            <Field field_name="Product Lifetime" label="productLifetime"/>            
            <Field field_name="Model/Type" label="model"/>
        </div>
    )
}

export default Price;

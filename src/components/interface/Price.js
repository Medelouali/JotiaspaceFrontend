import React from 'react';
import Field from "./Field";

function Price() {
    return (
        <div className="price-wrapper">
            <h3>Put A Price For Your Product</h3>
            <Field field_name="Country/City"/>
            <Field field_name="Product Name"/>
            <Field field_name="Last Price(USD)"/>
            <Field field_name="Items Number"/>            
            <Field field_name="Product Lifetime"/>            
            <Field field_name="Model/Type"/>
        </div>
    )
}

export default Price;

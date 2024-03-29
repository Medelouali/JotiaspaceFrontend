import React from 'react';
import "./product.css";

function Product({model, price, image, location}) {
    return (
        <div className="product-2">
            <div className="model">{model}</div>
            <div className="product-image-2"><img src={image} alt=""/></div>
            <div className="price-location">
                <h5 className="price">{price}</h5>
                <h5 className="location">{location}</h5>
            </div>
        </div>
    )
}

export default Product;

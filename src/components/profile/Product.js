import React from 'react';

function Product({model, price, image, location}) {
    return (
        <div className="product-2">
            <div className="model">{model}</div>
            <div className="product-image-2"><img src={image} alt=""/></div>
            <div className="price-location">
                <div className="price">{price}</div>
                <div className="location">{location}</div>
            </div>
        </div>
    )
}

export default Product;

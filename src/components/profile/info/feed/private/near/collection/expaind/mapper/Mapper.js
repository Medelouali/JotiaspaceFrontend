import React from 'react'
import Product from "./product/Product";
import "./mapper.css";

function Mapper({list}) {
    return (
        <div className="expaind">
            {list.map((item, index)=>(
                <Product key={`${item.model}#-${index}`} model={item.model}
                    price={item.price} location={item.location}
                    image={item.image}
                />
            ))}
        </div>
    )
}

export default Mapper

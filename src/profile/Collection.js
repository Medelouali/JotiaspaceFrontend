import React, { useEffect, useRef } from 'react';
import Collect from './Collect';
import Expaind from './Expaind';
import { useSelector } from "react-redux";

function Collection({coordinates}){
    const coords = useSelector(state => state.collectionCoord);
    const ref=useRef(null);

    useEffect(() => {
        if(ref.current){
            ref.current.scrollIntoView({behavior: "smooth", block: "end"});
        };    
    }, [coords])
    return (
        <div className="collection">
            <div className="collections">
                {coordinates.list.map((item, index)=>(
                    <Collect key={`${item.name}#${index}`} name={item.name.toLowerCase()} 
                        logo={item.logo} cath={coordinates.cath} type={coordinates.type}
                    />
                ))}
            </div>
            <div ref={ref} className=""><Expaind origin={coordinates} what={coords}/></div>
        </div>
    )
}

export default Collection;

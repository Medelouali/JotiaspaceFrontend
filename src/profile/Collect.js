import React from 'react';
import collection from "../redux/actions/collection";
import { useDispatch, useSelector } from "react-redux";
import collectionCoord from "../redux/actions/collectionCoord";

function Collect({name, logo, cath, type}) {
    const dispatch=useDispatch();
    const current = useSelector(state => state.collection);

    const handleCollection=()=>{
        const coords={
            cath: cath,
            type: type,
            name: name
        }
        current[cath][type][name].active=!current[cath][type][name].active;
        dispatch(collection(current));
        dispatch(dispatch(collectionCoord(coords)));
    };

    return (
        <div onClick={handleCollection} className="collect">
            <h6>{name}</h6>
            <img src={logo} alt=""/>
        </div>
    )
}

export default Collect;

import React from 'react';
import data from "../../../../../../data.js";
import Mapper from "./mapper/Mapper";

import "./expaind.css";

function Expaind({origin, what}) {
    if(origin.cath===what.cath && origin.type===what.type){
        switch(what.cath){
            case "near":
                if(data.hasOwnProperty(what.type)){
                    if(data[what.type].hasOwnProperty(what.name))
                        return (
                            <div className="outer-expaind">
                                    <Mapper list={data[what.type][what.name]}/>
                            </div>
                        );
                    else{
                        return(<></>);
                    }
                }else{
                    return(<></>);
                };
            case "global":
                if(data.hasOwnProperty(what.type)){
                    if(data[what.type].hasOwnProperty(what.name))
                        return (
                            <div className="outer-expaind">
                                    <Mapper list={data[what.type][what.name]}/>
                            </div>
                        );
                    else{
                        return(<></>);
                    }
                }else{
                    return(<></>);
                }
            default:
                return(
                    <></>
                );
        };
    }else{
        return(<></>);
    }
}

export default Expaind;

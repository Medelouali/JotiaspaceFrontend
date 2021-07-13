import React from 'react';
import data from "./data.js";
import Mapper from "./Mapper";

function Expaind({origin, what}) {
    if(origin.cath===what.cath && origin.type===what.type){
        switch(what.cath){
            case "near":
                if(data.hasOwnProperty(what.type)){
                    if(data[what.type].hasOwnProperty(what.name))
                        return (
                            <div className="expaind">
                                    <Mapper list={data[what.type][what.name]}/>
                            </div>
                        );
                    else{
                        return(<div className=""></div>);
                    }
                }else{
                    return(<div className=""></div>);
                };
            case "global":
                if(data.hasOwnProperty(what.type)){
                    if(data[what.type].hasOwnProperty(what.name))
                        return (
                            <div className="expaind">
                                    <Mapper list={data[what.type][what.name]}/>
                            </div>
                        );
                    else{
                        return(<div className=""></div>);
                    }
                }else{
                    return(<div className=""></div>);
                }
            default:
                return(
                    <div className=""></div>
                );
        };
    }else{
        return(<></>);
    }
}

export default Expaind;

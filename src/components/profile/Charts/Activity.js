import React from 'react';
//import { Doughnut } from "react-chartjs-2";
import Generic from './Generic';
//import CountUp from "react-countup";

function Activity() {
    return (
        <Generic type="Pie" 
            labels={["Transports", "Properties", "Electronics", "Animals", "Clothings", "Apps"]}
            data={[per(5), per(30), per(20), per(10), per(5), per(30)]}
            title="Your Activities On JotiaSpace Lately"
        />
    )
}

function per(num){
    const value=num*(360/100);
    console.log(value);
    return value;
}

export default Activity;

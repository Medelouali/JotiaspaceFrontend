import React from 'react';
import { Doughnut, Pie, Line } from "react-chartjs-2";
import "./chart.css";

function Generic({type, labels, data, title}) {
    switch(type){
        case "Pie":
            return (
                <div className="chart">
                    <Pie data={{
                        labels:{labels},
                        datasets:[
                            {
                                label: {title},
                                data:{data},
                                backgroundColor: [
                                    "red",
                                    "green",
                                    "blue"
                                ],
                                fill: false
                            } 
                        ],
                    }} options={
                        {
                            legend:{
                                labels:{
                                    fontColor: "blue"
                                }
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    }/>
                </div>
            )
        case "Doughnut":
            return (
                <div className="chart">
                    <Doughnut data={{
                        labels:{labels},
                        datasets:[
                            {
                                label: {title},
                                data:{data},
                                backgroundColor: [
                                    "red",
                                    "green",
                                    "blue"
                                ],
                                fill: false
                            } 
                        ],
                    }} options={
                        {
                            legend:{
                                labels:{
                                    fontColor: "blue"
                                }
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    }/>
                </div>
            )
    case "Line":
        return (
            <div className="chart">
                <Line data={{
                    labels:{labels},
                    datasets:[
                        {
                            label: {title},
                            data:{data},
                            backgroundColor: [
                                "yellow",
                                "green",
                                "blue"
                            ],
                            fill: false
                        } 
                    ],
                }} options={
                    {
                        legend:{
                            labels:{
                                fontColor: "blue"
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                }/>
            </div>
        )
    default:
        return(
            <div className=""></div>
        )
    }
}

export default Generic;

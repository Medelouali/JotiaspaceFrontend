/*
import io_c from "socket.io-client";

const endPoint="http://localhost:8000/";
const io=io_c(endPoint);
*/
var bigNums=[1000, 1000000, 1000000000, 1000000000000];


export function shorten(num){
    if(num<bigNums[0])
        return num;
    else if(num<bigNums[1]){
        let result=num/bigNums[0];
        return `${Math.round(result*10)/10}K`;
    }else if(num<bigNums[2]){
        let result=num/bigNums[1];
        return `${Math.round(result*10)/10}M`;
    }else if(num<bigNums[3]){
        let result=num/bigNums[2];
        return `${Math.round(result*10)/10}B`;
    }else{
        let result=num/bigNums[3];
        return `${Math.round(result*10)/10}T`;
    }
};

export function sendMessage(textMessage, to_id){
    console.log("We'll come to u later on...");
}

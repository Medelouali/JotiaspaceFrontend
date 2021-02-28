import valid from "./svg/valid.svg";
import invalid from "./svg/invalid.svg";
import socket from "socket.io-client";
import { useDispatch } from "react-redux";
import updateAll from "../../../redux/actions/updateAll";

const endpoint="http://localhost:8000/";

const io=socket(endpoint);

export function valid_name(name){
    let regex=/^\w+$/;
    return regex.test(name) && name.length>1;
};

export function valid_email(email){
    let regex=/^[\w-\\.]+@([\w-]+\\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

export function valid_password(password){
    return password.length>=8;
};

export function valid_input(value, type){
    switch(type){
        case "name":
            return valid_name(value);
        case "email":
            return valid_email(value);
        case "password":
            return valid_password(value);
        default:
            return false;
    };
};

export function logo(flag){
    switch(flag){
        case 0:
            return <img className="logo" src={invalid} alt=""/>
        case 1:
            return <img className="logo" src={valid} alt=""/>
        default:
            return <span className="logo"></span>
    };
}

const valid_pic=(<img className="icon" src={valid} alt=""/>);
const invalid_pic=(<img className="icon" src={invalid} alt=""/>);

export function handler(flag){
    switch(flag){
        case 0:
            return invalid_pic;
        case 1:
            return valid_pic;
        default:
            return "";
    };
}

export function getUser(user_id, my_id){
    io.emit("getUser", user_id);
    io.on("giveUser", (user)=>{
        if(user_id===my_id){
            const dispatch=useDispatch();
            dispatch(updateAll(user));
        }else{
            return user;
        };
    });
};
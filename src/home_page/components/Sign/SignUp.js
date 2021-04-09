import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import Start from "../../../interface/Start";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import pager from "../../../redux/actions/pager";
import signer from "../../../redux/actions/signer";
import online from "../../../redux/actions/online";
import updateUser from "../../../redux/actions/updateUser";

import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "use-media";

import "./sign.css";

function SignUp(){
    const dispatch=useDispatch();
    const isBigScreen=useMedia({minWidth: "900px"});

    const [processing, setProcessing]=useState(false);
    const [response, setResponse]=useState({});
    const signData=useSelector(state=>state.signer);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        setProcessing(true);
        try{
            const response=await axios.post("http://localhost:5000/sign/signUp", signData);
            console.log(response.data);
            setResponse(response.data);
            const data=["username", "email", "password", "confirm"];
            data.map((item)=>dispatch(signer({key: item, value: ""})));
            if(!response.data.error){
                dispatch(online(true));
                dispatch(updateUser(response.data.data));
                dispatch(pager("store"));
            }
            setProcessing(false);
        }catch(err){
            console.log(err);
        };
    }
    return(
        <div className="signUp">
            <form onSubmit={handleSubmit} method="post" 
                    className={ "inner-sign" + (isBigScreen ? " big-size": "")}>
                <label htmlFor="avatar"><PersonOutlineIcon style={{fill: "rgb(120, 120, 241)"}}/></label>
                <input id="avatar" type="file"/>
                <Input label={"Username"}/>
                <Input label={"Email"} isEmail={true}/>
                <Input isPassword={true} label={"Password"}/>
                <Input isPassword={true} label={"Confirm"}/>
                <div className="submit">
                    <button onClick={handleSubmit} className="submit">Create Account</button>
                    <div onClick={()=>dispatch(pager("home-in"))} className="already-account">Already Have An Account?!</div>
                    <div className="processing">
                        { response.error ? response.error :<Start start={processing}/> }
                    </div>
                </div>
            </form>
        </div>
    );
}


export default SignUp;
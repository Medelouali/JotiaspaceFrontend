import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import Start from "../../../interface/Start";
import pager from "../../../redux/actions/pager";
import signer from "../../../redux/actions/signer";

import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "use-media";

import "./sign.css";

function SignIn(){
    const dispatch=useDispatch();
    const isBigScreen=useMedia({minWidth: "900px"});

    const [processing, setProcessing]=useState(true);
    const [response, setResponse]=useState({});
    const signData=useSelector(state=>state.signer);

    const handleSubmit= async(e)=>{
        console.log(signData);
        e.preventDefault();
        setProcessing(true);
        try{
            const response=await axios.post("http://localhost:5000/sign/signUp", signData);
            setResponse(response.data);
            const data=["email", "password"];
            data.map((item)=>dispatch(signer({key: item, value: ""})));
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className="signUp">
            <form onSubmit={handleSubmit} method="post" 
                    className={ "inner-sign" + (isBigScreen ? " big-size": "")}>
                <Input label={"Email"} isEmail={true}/>
                <Input isPassword={true} label={"Password"}/>
                <div className="submit">
                    <button onClick={handleSubmit} className="submit">Create Account</button>
                    <div onClick={()=>dispatch(pager("home-up"))} className="already-account">Don't Have An Account?!</div>
                    <div className="processing">
                        { response.error ? response.error :<Start start={processing}/> }
                    </div>
                </div>
            </form>
        </div>
    );
}


export default SignIn;
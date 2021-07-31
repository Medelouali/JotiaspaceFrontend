import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import Start from "../../interface/Start";
import pager from "../../../redux/actions/pager";
import online from "../../../redux/actions/online";
import updateUser from "../../../redux/actions/updateUser";

import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "use-media";
import { motion } from "framer-motion";
import "./sign.css";

function SignIn(){
    const dispatch=useDispatch();
    const isBigScreen=useMedia({minWidth: "900px"});

    const [response, setResponse]=useState({});
    const [processing, setProcessing]=useState(false);

    const signData=useSelector(state=>state.signer);

    const handleSubmit= async(e)=>{
        console.log(signData);
        e.preventDefault();
        setProcessing(true);
        try{
            const serverResponse=await axios.post("https://jotiaspacewebsite.herokuapp.com/sign/signIn", signData);
            const jsonData=serverResponse.data;
            
            setResponse(jsonData);
            setProcessing(false);

            if(jsonData.error===""){
                dispatch(online(true));
                dispatch(updateUser(jsonData.data));
                dispatch(pager("store"));
            }
        }catch(err){
            console.log(err);
        }

    }
    return(
        <motion.div 
        initial={{x: "100%"}}
        animate={{x: 0}}
        transition={{duration: 0.4}} 
        className="signUp">
            <form onSubmit={handleSubmit} method="post" 
                    className={ "inner-sign" + (isBigScreen ? " big-size": "")}>
                <Input label={"Email"} isEmail={true}/>
                <Input isPassword={true} label={"Password"}/>
                <div className="submit">
                    <button onClick={handleSubmit} className="submit">Log In</button>
                    <div onClick={()=>dispatch(pager("home-up"))} className="already-account">Don't Have An Account?!</div>
                    <div className="processing">
                    { response.error ? <p>{ response.error }</p>: 
                            <Start start={processing} phrase={"Signing In..."}/>}
                    </div>
                </div>
            </form>
        </motion.div>
    );
}


export default SignIn;
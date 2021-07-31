import React, { useState, useRef } from "react";
import Input from "./Input";
import axios from "axios";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import pager from "../../../redux/actions/pager";
import online from "../../../redux/actions/online";
import updateUser from "../../../redux/actions/updateUser";

import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "use-media";

import { motion } from "framer-motion";
import "./sign.css";
import Start from "../../interface/Start";

function SignUp(){
    const dispatch=useDispatch();
    const isBigScreen=useMedia({minWidth: "900px"});

    const divRef=useRef(null);
    const [response, setResponse]=useState({});
    const [processing, setProcessing]=useState(false);

    const signData=useSelector(state=>state.signer);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(divRef.current) divRef.current.scrollIntoView({ behavior: "smooth", block: "center"});
        setProcessing(true);
        try {
            const serverResponse=await axios.post("https://jotiaspacewebsite.herokuapp.com/sign/signUp", signData);
            const jsonData=serverResponse.data;
            
            setResponse(jsonData);
            setProcessing(false);

            if(jsonData.error===""){
                dispatch(online(true));
                dispatch(updateUser(jsonData.data));
                dispatch(pager("store"));
            }
        } catch (error) {
            console.log(error);
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
                <label htmlFor="avatar"><PersonOutlineIcon style={{fill: "rgb(255, 255, 255)"}}/></label>
                <input id="avatar" type="file"/>
                <Input label={"Username"}/>
                <Input label={"Email"} isEmail={true}/>
                <Input label={"Location"}/>
                <Input label={"Occupation"}/>
                <Input isPassword={true} label={"Password"}/>
                <Input isPassword={true} label={"Confirm"}/>
                <div className="submit">
                    <button onClick={handleSubmit} className="submit">Create Account</button>
                    <div onClick={()=>dispatch(pager("home-in"))} className="already-account">Already Have An Account?!</div>
                    <div ref={divRef} className="processing">
                        { response.error ? <p>{ response.error }</p>: 
                            <Start start={processing} phrase={"Signing Up..."}/>}
                    </div>
                </div>
            </form>
        </motion.div>
    );
}


export default SignUp;
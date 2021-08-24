import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import axios from "axios";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import pager from "../../../redux/actions/pager";
import online from "../../../redux/actions/online";
import updateUser from "../../../redux/actions/updateUser";
import signer from "../../../redux/actions/signer";

import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "use-media";

import { motion } from "framer-motion";
import Start from "../../interface/info/start/Start";

import { reactLocalStorage } from 'reactjs-localstorage';


import "./sign.css";

function SignUp(){
    const dispatch=useDispatch();
    const signData= useSelector(state => state.signer);
    const isBigScreen=useMedia({minWidth: "900px"});

    const divRef=useRef(null);
    const [response, setResponse]=useState({});
    const [modefied, setModefied]=useState(false);
    const [processing, setProcessing]=useState(false);

    useEffect(() => {
        setModefied(true);
    }, [signData]);

    const handleSubmit= async(e)=>{
        setModefied(false);
        e.preventDefault();
        if(divRef.current) divRef.current.scrollIntoView({ behavior: "smooth", block: "center"});
        setProcessing(true);
        try {
            const { data }=await axios.post("https://jotiaspacewebsite.herokuapp.com/sign/signUp", signData);
            console.log(data);
            Object.keys(data.tokens).forEach(token=>{
                reactLocalStorage.setObject(`${token}`, data.tokens[token]);
            });

            reactLocalStorage.setObject("Email", signData.email);
            reactLocalStorage.setObject("Password", signData.password);
            setResponse(data);
            setProcessing(false);

            if(data.error===""){
                dispatch(online(true));
                dispatch(updateUser(data.data));
                dispatch(pager("store"));
                dispatch(signer({set: true}));
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
                <Input isPassword={true} label={"Password"}/>
                <Input isPassword={true} label={"Confirm"}/>
                <Input label={"Location"}/>
                <Input label={"Occupation"}/>
                <div className="submit">
                        <Button onClick={handleSubmit} variant="contained" color="primary"
                            size="small">
                            <h3>Create</h3>
                        </Button>
                    <div onClick={()=>dispatch(pager("home-in"))} className="already-account">Already Have An Account?!</div>
                    <div ref={divRef} className="processing">
                        { response.error && !modefied  && !processing ? <p>{ response.error }</p>: 
                            <Start start={processing} phrase={"Signing Up..."}/>}
                    </div>
                </div>
            </form>
        </motion.div>
    );
}


export default SignUp;
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import pager from "../../../redux/actions/pager";
import online from "../../../redux/actions/online";
import updateUser from "../../../redux/actions/updateUser";
import signer from "../../../redux/actions/signer";

import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "use-media";
import { motion } from "framer-motion";

import Start from "../../interface/info/start/Start";
import Input from "./Input";
import { Button } from "@material-ui/core";

// import io from "socket.io-client";
// import socket from "../../../redux/actions/socket";
import { reactLocalStorage } from 'reactjs-localstorage';
import "./sign.css";

// const socketIo=io.connect("https://jotiaspacewebsite.herokuapp.com");

function SignIn(){
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
            const { data }=await axios.post("https://jotiaspacewebsite.herokuapp.com/sign/signIn", {
                email: signData.email, password: signData.password
            });
            // const { data }=await axios.post("http://localhost:5000/sign/signIn", {
            //     email: signData.email, password: signData.password
            // });
            
            setResponse(data);
            setProcessing(false);

            if(data.error===""){
                dispatch(online(true));
                dispatch(updateUser(data.data));
                dispatch(pager("store"));
                dispatch(signer({set: true}));
                Object.keys(data.tokens).forEach(token=>{
                    reactLocalStorage.setObject("authToken", data.tokens[token]);
                });
                dispatch(signer({ key: "posterName", value: data.username}));
                // dispatch(socket(socketIo));
            };
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
                <Input label={"Email"} isEmail={true}/>
                <Input isPassword={true} label={"Password"}/>
                <div className="submit">
                        <Button onClick={handleSubmit} variant="contained" color="primary"
                            size="small">
                            <h3>Log In</h3>
                        </Button>
                    <div onClick={()=>dispatch(pager("home-up"))} className="already-account">Already Have An Account?!</div>
                    <div ref={divRef} className="processing">
                        { response.error && !modefied  && !processing ? <p>{ response.error }</p>: 
                            <Start start={processing} phrase={"Signing In..."}/>}
                    </div>
                </div>
            </form>
        </motion.div>
    );
}


export default SignIn;
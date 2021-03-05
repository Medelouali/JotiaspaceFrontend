import React, { useState } from 'react';
//import axios from "axios";
//import { Link } from 'react-router-dom';
//import authenticating from "./svg/authenticating.svg";
import eye from "../../../store_page/components/svg/eye.svg";
import Start from "../../../interface/Start";
import { useDispatch } from "react-redux";
//import update from "../../../redux/actions/updateUser";
//import login from "../../../redux/actions/login";
import "./sign.css";
import pager from '../../../redux/actions/pager';

function SignIn(){

    //const [process, setProcess]=useState(false);
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    /*
    const [serverResponse, setServerResponse]=useState({
        error: "",
        client: {}
    });
    */
    const dispatch=useDispatch();
    const handleForm=()=>{
        dispatch(pager("store"));
    }
    /*
    const [online, setOnline]= useState(useSelector(state => state.online));
    const handleForm=async(e)=>{
        e.preventDefault();
        setProcess(true);
        try{
            const res=await axios.post("http://localhost:8000/users/signin", { 
                email: email, 
                password: password});
            setServerResponse(res.data);
            if(!res.data.error){
                dispatch(update(res.data.client));
                dispatch(login());
                setOnline(true);
            };
        }catch(e){
            console.log(e);
        }finally{
            setProcess(false);
            dispatch(pager("store"));
        };
    };
    */
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    };
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    };

    const [display, setDisplay]=useState(false);
    const [see, setSee]=useState(false);

    return(
        <div id="sign_up">
            <form onSubmit={handleForm} id="data" action="#" method="POST" encType="multipart/form-data">
                <div>
                    <div className="name">
                        <input type="email" onChange={handleEmail} value={email} name="email" id="email" autoComplete="off" required placeholder="Email"/>
                        <span id="nam"></span>
                    </div>
                    <span id="name-error"></span>
                </div>

                <div>
                    <div className="name">
                        <input onFocus={()=>setDisplay(true)} type={see ? "text": "password"} onChange={handlePassword} value={password} name="password" id="password" autoComplete="off" required placeholder="Password"/>
                        <span id="pas"></span>
                    </div>
                    {display ? <img onClick={()=>setSee(!see)} className="see-me" src={eye} alt=""/>: ""}
                </div>

                <div className="submit-group">
                    <div className="submit">
                        <button id="validate" type="submit">Sign In</button>
                    </div>
                    <div className="new-account">
                        <p onClick={()=>dispatch(pager("home-in"))}>Don't have account!?</p>
                    </div>
                    <div className="warning">
                        <Start start={process}/>
                        <p id="warning">{"Warnning is comming up"/*serverResponse.error*/}</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
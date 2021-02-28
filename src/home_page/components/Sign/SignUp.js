import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profile_pic from "./svg/profile.svg";
//import authenticating from "./svg/authenticating.svg";
import { handler, valid_name, valid_password, valid_email } from "./logic";
import "./sign.css";
import eye from "../../../store_page/components/svg/eye.svg";
import { useDispatch, useSelector } from "react-redux";
import update from "../../../redux/actions/updateUser";
import login from "../../../redux/actions/login";
import Store from "../../../store_page/components/Store";
import Start from "../../../interface/Start";

function SignUp(){
    const [profile, setProfile]=useState("");
    const handleProfile=(e)=>{
        setProfile(e.target.value)
    };

    const [name, setName]=useState({value: "", flag: -1});
    const handleName=(e)=>{
        if(email.flag===1){
            setEmail({value: email.value, flag: -1});
        };

        if(password.flag===1){
            setPassword({value: password.value, flag: -1});
        };

        if(valid_name(e.target.value))
            setName({value: e.target.value, flag: 1})
        else
            setName({value: e.target.value, flag: 0});
    };

    const [email, setEmail]=useState({value: "", flag: -1});
    const handleEmail=(e)=>{
        if(name.flag===1){
            setName({value: name.value, flag: -1})
        }

        if(password.flag===1){
            setPassword({value: password.value, flag: -1});
        };

        if(valid_email(e.target.value))
            setEmail({value: e.target.value, flag: 1});
        else
            setEmail({value: e.target.value, flag: 0});
    };

    const [password, setPassword]=useState({value: "", flag: -1});
    const handlePassword=(e)=>{
        if(name.flag===1){
            setName({value: name.value, flag: -1})
        }

        if(email.flag===1){
            setEmail({value: email.value, flag: -1});
        };

        if(valid_password(e.target.value))
            setPassword({value: e.target.value, flag: 1});
        else
            setPassword({value: e.target.value, flag: 0});
       
    };

    //const [online, setOnline]=useState(false);
    const [serverResponse, setServerResponse]=useState({
                    error: "",
                    client: {}
                });

    
    const [process, setProcess]=useState(false);

    const dispatch=useDispatch();
    const handleForm=async(e)=>{
        e.preventDefault();
        setProcess(true);
        try{
            const res=await axios.post("http://localhost:8000/users/signup", {
                username : name.value, 
                email: email.value, 
                password: password.value});
            console.log(res.data);
            if(!res.data.error){
                dispatch(update(res.data.client));
                dispatch(login());
            };
            setServerResponse(res.data);
        }catch(e){
            console.log(e);
        }finally{
            setProcess(false);
        }
    };

    const online=useSelector(state=>state.online);
    const [see, setSee]=useState(false);
    const handleSee=()=>{
        setSee(!see);
    }

    const [display, setDisplay]=useState(false);
    if(!online){
        return(
            <div id="sign_up">
            <form onSubmit={handleForm} id="data" encType="multipart/form-data">
                <div className="profile">
                    <label htmlFor="profile"><img id="profile-picture" src={profile_pic} alt=""/><br/><i>Add Picture</i></label>
                    <input type="file" onChange={handleProfile} value={profile} name="profile" id="profile" accept="image/*"/>
                </div>

                <div>
                    <div className="name">
                        <input onChange={handleName} value={name.value} type="text" name="username" id="name" autoComplete="off" required placeholder="Userame"/>
                        <span id="nam">{handler(name.flag)}</span>
                    </div>
                </div>
            
                <div>
                    <div className="name">
                        <input onChange={handleEmail} value={email.value} type="email" id="email" name="email" autoComplete="off" required placeholder="Email"/>
                        <span id="ema">{handler(email.flag)}</span>
                    </div>
                </div>

                <div>
                    <div className="name">
                        <input onFocus={()=>setDisplay(true)} onChange={handlePassword} value={password.value} type={see ? "text": "password"} name="password" id="password" autoComplete="off" required placeholder="Password"/>
                        <span id="pas">{handler(password.flag)}</span>
                    </div>
                    {display ? <img onClick={handleSee} className="see-me" src={eye} alt=""/>: ""}
                </div>

                <div className="submit-group">
                    <div className="submit">
                        <button onSubmit={handleForm} id="validate" type="submit">Create</button>
                    </div>
                    <div className="new-account">
                        <Link to="/sign-in"><p>Already have account!?</p></Link>
                    </div>
                    <div className="warning">
                        <Start start={process}/>
                        <p id="warning">{serverResponse.error}</p>
                    </div>
                </div>
            </form>
        </div>
        );
    }else{
        return(
            <Store/>
        );
    }
}

export default SignUp;
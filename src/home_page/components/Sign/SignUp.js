import React, { useState } from "react";
import profile_pic from "./svg/profile.svg";
import { handler, valid_name, valid_password, valid_email } from "./logic";
import eye from "../../../store_page/components/svg/eye.svg";
import { useDispatch } from "react-redux";
import Start from "../../../interface/Start";
import pager from "../../../redux/actions/pager";

import "./sign.css";

function SignUp({args}){
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
    /*
    const [online, setOnline]=useState(false);
    const [serverResponse, setServerResponse]=useState({
                    error: "",
                    client: {}
                });

    */
    const [process, setProcess]=useState(false);
    const dispatch=useDispatch();
    const handleForm=()=>{
        dispatch(pager("store"));
        setProcess(true);
    };
    
    /*
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
            dispatch(pager("store"));
        }
    };
    */
    //const online=useSelector(state=>state.online);
    const [see, setSee]=useState(false);
    const handleSee=()=>{
        setSee(!see);
    }

    const [display, setDisplay]=useState(false);
    const page = !args.length ? "home-in": "home-up";
    const handleSign=()=>{
        dispatch(pager(page));
        console.log(page);
        console.log(args);
    };
    console.log(args);
    console.log(args.length);
    console.log(args.length ? true: false);
    return(
        <div className="sign">
            <form onSubmit={handleForm} className="form" encType="multipart/form-data">
                {!args.length ? (
                    <>
                        <div className="profile">
                            <label htmlFor="profile"><img id="profile-picture" src={profile_pic} alt=""/><br/>Picture?</label>
                            <input type="file" onChange={handleProfile} value={profile} name="profile" id="pic" accept="image/*"/>
                        </div>

                        <div className="profile">
                            <div className="name">
                                <input className={name.value ? "data": ""} onChange={handleName} value={name.value} type="text" name="username" id="name" autoComplete="off" required placeholder="Userame"/>
                                {handler(name.flag)}
                            </div>
                        </div>
                    </>
                ): ""}
            
                <div className="profile">
                    <div className="name">
                        <input className={email.value ? "data": ""} onChange={handleEmail} value={email.value} type="email" id="email" name="email" autoComplete="off" required placeholder="Email"/>
                        {handler(email.flag)}
                    </div>
                </div>

                <div className="profile-see">
                    <div className="name">
                        <input className={password.value ? "data": ""} onFocus={()=>setDisplay(true)} onChange={handlePassword} value={password.value} type={see ? "text": "password"} name="password" id="pass" autoComplete="off" required placeholder="Password"/>
                        {handler(password.flag)}
                    </div>
                    <div className="">
                        {display ? <img onClick={handleSee} className="see-me" src={eye} alt=""/>: ""}
                    </div>
                </div>

                <div className="submit-group">
                    <div className="submit">
                        <button onSubmit={handleForm} id="create" type="submit">
                            {!args.length ? "Create": args[0]}
                        </button>
                    </div>
                    <div onClick={handleSign} className="new-account">
                        { !args.length ? "Already have account !?": args[1]}
                    </div>
                    <div className="warning">
                        <Start start={process}/>
                        <p id="warning">{"Warnning goes here"/*serverResponse.error*/}</p>
                    </div>
                </div>
            </form>
    </div>
    );
}

SignUp.defaultProps={
    args: []
};

export default SignUp;
import React, { useState, useRef } from 'react';
import Start from "./start/Start";
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import { useDispatch, useSelector } from "react-redux";
import signer from "../../../redux/actions/signer";
import axios from 'axios';
import "./info.css";

import { reactLocalStorage } from "reactjs-localstorage";

function Info(){
    const [start, setStart]=useState(false);
    const [response, setResponse]=useState(null);
    const divRef=useRef(null);
    const [value, setValue]=useState("");
    const dispatch=useDispatch();
    const post= useSelector(state => state.signer);
    const user= useSelector(state => state.updateUser);

    const handleValue=(e)=>{
        setValue(e.target.value);
        dispatch(signer({key: "description", value: value}));
    }

    const handlePost=async(e)=>{
        console.log(post);
        setStart(true);
        try {
            post.posterName=user.username;
            const { data }=await axios.post("https://jotiaspacewebsite.herokuapp.com/posts/savePost", { 
                post, tokens: { authToken: reactLocalStorage.getObject("authToken", {}, true) } });
            // const { data }=await axios.post("http://localhost:5000/posts/savePost", { 
            //     post, tokens: { authToken: reactLocalStorage.getObject("authToken", "", true) } });
            setResponse(data);
            if(data.done) dispatch(signer({ set : true }));
        } catch (error) {
            console.log(response);
        };
        if(divRef.current) divRef.current.scrollIntoView({ behavior: "smooth", block: "center"});
        setStart(false);
    };
    return (
        <div className="info-wrapper">
            <h3>Describe Your Product</h3>
            <div className="">
                <div className="">
                    <label htmlFor="picture__">
                        <span className="field-label">Add Picture/Video</span>
                        <PhotoCameraOutlinedIcon/>
                    </label>
                    <input id="picture__" className="image-input" type="file"/>
                </div>
                <div className="">
                    <label className="field-label" htmlFor="pictures">Add a product description:</label>
                    <textarea value={value} onChange={handleValue} 
                    className="data-input" name="picture" id="pictures" rows="10" required></textarea>
                </div>
            </div>

            <div className="post-data">
                <button type="submit" onClick={handlePost}>Post</button>
            </div>
            <div className="ref-div" ref={divRef}>
                {
                    response===null ? <Start start={start} phrase={"Uploading your post..."}/>: 
                    response.error!=="" ? <h6>{response.error}</h6> :
                    response.done===true ? <h6>{response.data}</h6>:
                    <></>
                }
            </div>
        </div>
    );
}

export default Info;

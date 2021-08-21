import React, { useState, useRef } from 'react';
import Start from "./start/Start";
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import { useDispatch, useSelector } from "react-redux";
import signer from "../../../redux/actions/signer";
import axios from 'axios';
import "./info.css";

function Info(){
    const [start, setStart]=useState(false);
    const divRef=useRef(null);
    const [value, setValue]=useState("");
    const dispatch=useDispatch();
    const postData= useSelector(state => state.signer);

    const handleValue=(e)=>{
        setValue(e.target.value);
        dispatch(signer({key: "productDescription", value: value}));
    }

    const handlePost=async(e)=>{
        setStart(true);
        try {
            const { data }=await axios.post("https://jotiaspacewebsite.herokuapp.com/posts/savePost", postData);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
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
                    <label className="field-label" htmlFor="picture__">Add a product description:</label>
                    <textarea value={value} onChange={handleValue} 
                    className="data-input" name="picture" id="picture__" rows="10" required></textarea>
                </div>
            </div>

            <div className="post-data">
                <button type="submit" onClick={handlePost}>Post</button>
            </div>
            <div className="ref-div" ref={divRef}><Start start={start} phrase={"Uploading your post..."}/></div>
        </div>
    );
}

export default Info;

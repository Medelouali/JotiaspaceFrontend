import React, { useState } from 'react';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import "./search.css";
import { motion } from "framer-motion";

export default function Search({placeHolder, callback, action}) {
    const [expainded, setExpainded]=useState(false);
    const handleShow=()=>{
        setExpainded(!expainded);
    }

    const handleSubmit=()=>{
        callback();
    };

    return (
        <div className="search-query">
            {
                expainded ? 
                <motion.form 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7}}
                action={action} onSubmit={handleSubmit} className="get-data">
                    <input type="text" className="input-field" id="query" placeholder={placeHolder}/>
                    <PageviewOutlinedIcon/>
                    <input type="submit" value="Submit" className="hidden"/>
                </motion.form> : <PageviewOutlinedIcon onClick={handleShow}/>
            }
        </div>
    )
}

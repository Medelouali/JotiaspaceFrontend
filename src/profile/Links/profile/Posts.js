import React from 'react';
import Manage from './Manage';
import { useSelector } from "react-redux";
import More from './More';

function Posts() {
    const where=useSelector(state=>state.view);

    return (
        <div className="posts">
            <Manage go={where}/>
            <More name="Mark Zuckerberg"/>
        </div>
    )
}

export default Posts;

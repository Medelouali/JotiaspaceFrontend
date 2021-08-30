import React, { useState } from 'react';
import { useSelector } from "react-redux";
import "./comments.css";

import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Tweet from './tweet/Tweet';
import Tree from '../../../../../logic/graphs/Tree';

import ScrollToBottom from 'react-scroll-to-bottom';

export default function Comments() {
    // const tree=new Tree();
    const [ input, setInput ]=useState("");
    const [ current, setCurrent ]=useState(new Tree());
    const user=useSelector(state=>state.updateUser);

    const handleComment=()=>{
        if(input==="") return;
        const com={
            name: user.username,
            tweet: input,
            replies: current.getLength()
        };
        current.insertNode(com);
        setCurrent(current);
        setInput("");
        // console.log(tree);
        console.log(current);
    };

    const handleInput=(e)=>{
        setInput(e.target.value);
    };

    const move=(index)=>{
        return ()=>{
            current.moveTo(index);
            setCurrent(current);
        };
    };
    const handleUp=()=>{
        current.moveUp();
        setCurrent(current);
    }
    return (
        <div className="comments">
            { current && !current.isRoot()  &&
                <div onClick={handleUp} className="go-up"><KeyboardBackspaceOutlinedIcon/></div> 
            }
            <div className="tweet">
                { current && current.getCurrent().root  &&
                    <Tweet tweet={current.getCurrent().root.tweet} name={current.getCurrent().root.name} 
                    replies={current.getCurrent().root.replies} hidden={current.isRoot()}/> }
            </div>
            <div className="subtweets">
                <div className="empty-div"></div>
                <ScrollToBottom className="subsubtweets">
                    { current && current.getCurrent().children && 
                        current.getCurrent().children.map((co, index)=><Tweet tweet={co.tweet} 
                        name={co.name} replies={co.replies} key={`${index}%§`} callback={move(index)}/>)}
                </ScrollToBottom>
            </div>
            <div className="tweet-input">
                <input onChange={handleInput} value={ input } type="text" placeholder="comment..."/>
                <div onClick={handleComment} className="send-comment"><SendOutlinedIcon/></div>
            </div>
        </div>
    )
}

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
    const [ tree ]=useState(new Tree());
    const user=useSelector(state=>state.updateUser);

    ;

    const handleComment=()=>{
        if(input==="") return;
        const com={
            name: user.username,
            tweet: input,
            replies: 0
        };
        tree.insertNode(com);
        setCurrent(tree);
        setInput("");
        console.log(current);
    };

    const handleInput=(e)=>{
        setInput(e.target.value);
    };

    const move=(index)=>{
        return ()=>{
            tree.moveTo(index);
            setCurrent(tree);
            setInput("Type Something");
            setInput("Type Somethinr");
            setInput("Type Something");
            setInput("");
        };
    };
    const handleUp=()=>{
        tree.moveUp();
        setCurrent(tree);
        setInput("Type Something");
        setInput("Type Somethinf");
        setInput("Type Something");
        setInput("");
    }
    return (
        <div className="comments">
            { current && !current.isRoot()  &&
                <div onClick={handleUp} className="go-up"><KeyboardBackspaceOutlinedIcon/></div> 
            }
            <div className="tweet">
                { current && current.getCurrent().root  &&
                    <Tweet tweet={current.getCurrent().root.tweet} name={current.getCurrent().root.name} 
                    replies={current.getLength()-1} hidden={current.isRoot()}/> }
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
                <input autoFocus onChange={handleInput} value={ input } type="text" placeholder="comment..."/>
                <div onClick={handleComment} className="send-comment"><SendOutlinedIcon/></div>
            </div>
        </div>
    )
}

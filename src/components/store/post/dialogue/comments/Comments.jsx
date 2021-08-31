import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import "./comments.css";

import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Tweet from './tweet/Tweet';
import Tree from '../../../../../logic/graphs/Tree';

import ScrollToBottom from 'react-scroll-to-bottom';

export default function Comments() {
    const [ input, setInput ]=useState("");
    const [ current, setCurrent ]=useState(new Tree());
    const [ tree ]=useState(new Tree());
    const [ flag, setFlag ]=useState(false);
    const user=useSelector(state=>state.updateUser);

    useEffect(() => {
        setCurrent(tree);
    }, [flag, tree]);

    const handleComment=()=>{
        if(input==="") return;
        const data={
            name: user.username,
            tweet: input,
            replies: 0,
            likes: 0,
            dislikes: 0,
            loves: 0
        };
        setCurrent(tree.insertNode(data));
        setInput("");
    };

    const handleInput=(e)=>{
        setInput(e.target.value);
    };

    const move=(index)=>{
        return ()=>{
            setCurrent(tree.moveTo(index));
            setFlag(!flag);
        };
    };
    
    const handleUp=()=>{
        setCurrent(tree.moveUp());
        setFlag(!flag);
    };

    const rea=(index)=>{
            return (r)=>{
                return ()=>{
                    current.increment(r, index);
                    setFlag(!flag);
                }
            };
    };
    return (
        <div className="comments">
            { current && !current.isRoot()  &&
                <div onClick={handleUp} className="go-up"><KeyboardBackspaceOutlinedIcon/></div> 
            }
            <div className="tweet">
                { current && current.getCurrent().root  &&
                    <Tweet tweet={current.getCurrent().root.tweet} name={current.getCurrent().root.name} 
                    replies={current.getLength()-1} hidden={current.isRoot()} rea={rea(0)}
                    likes={current.getCurrent().root.likes} dislikes={current.getCurrent().root.dislikes}
                    loves={current.getCurrent().root.loves}
                    /> }
            </div>
            <div className="subtweets">
                <div className="empty-div"></div>
                <ScrollToBottom className="subsubtweets">
                    { current && current.getCurrent().children && 
                        current.getCurrent().children.map((co, index)=><Tweet tweet={co.tweet} 
                        name={co.name} replies={co.replies} key={`${index}%§`} callback={move(index)} 
                        rea={rea(index)} likes={co.likes} dislikes={co.dislikes} loves={co.loves}/>)}
                </ScrollToBottom>
            </div>
            <div className="tweet-input">
                <input id="comment-input" autoFocus onChange={handleInput} value={ input } type="text" placeholder="comment..."/>
                <div onClick={handleComment} className="send-comment"><SendOutlinedIcon/></div>
            </div>
        </div>
    )
}

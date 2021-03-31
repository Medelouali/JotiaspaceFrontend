import React from 'react'
import Msg from "./Msg";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useDispatch } from "react-redux";
import zoomMessage from "../../../../redux/actions/intoView/zoomMessage";

function Conversation({chatText, ux}) {
    const dispatch=useDispatch();

    const handleView=()=>{
        dispatch(zoomMessage(true));   
    }
    return (
        <div className="inner-conversation">
            {chatText.map((item, index)=>{
                const flag=item["Him"]===undefined ? "Me": "Him";
                return <Msg flag={flag} textMsg={item[flag]} key={`#${index}`}/>
            })}
            <div onClick={handleView} className="upward">
                {ux ? <ArrowUpwardIcon/> : <></>}
            </div>
        </div>
    )
}

Conversation.defaultProps={
    chatText: [],
    ux: false
        
};

export default Conversation;

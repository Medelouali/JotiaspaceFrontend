import React from 'react'
import Msg from "./Msg";
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import { useDispatch } from "react-redux";
// import zoomMessage from "../../../../redux/actions/intoView/zoomMessage";

function Conversation({chatText}) {
    return (
        <div className="inner-conversation">
            {chatText.map((item, index)=>{
                const flag=item["Him"]===undefined ? "Me": "Him";
                return <Msg flag={flag} textMsg={item[flag]} timeStamp={item.timeStamp} key={`#${index}`}/>
            })}
        </div>
    )
}

Conversation.defaultProps={
    chatText: [],
    ux: false
        
};

export default Conversation;

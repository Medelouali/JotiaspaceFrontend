import React from 'react';
import "./Post.css";
import Price from './Price';
import Info from './Info';
import { useDispatch } from "react-redux";
import pager from "../redux/actions/pager";

function Post() {
    const dispatch=useDispatch();

    return(
        <div className="">
            <div className="routes">
                <svg onClick={()=>dispatch(pager("store"))}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="back-icon svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
            </div>
            <div className="post-wrapper">
                <div className="labels">
                    <div className="inner-1">
                        <Price/>
                    </div>
                </div>
                <div className="data">
                    <div className="inner-2">
                        <Info/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

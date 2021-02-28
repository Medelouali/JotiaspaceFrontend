import React from 'react';
//import Detail from './Detail';
import {ScrollerX} from './Scroller';
//import {Reaction} from "./Reaction";
import NewPost from "./NewPost";

function Fixed(){

    return(
        <div className="fixed">
            <div className="core">
                <ScrollerX/>
                <NewPost/>
            </div>
        </div>
    );
}

export default Fixed;
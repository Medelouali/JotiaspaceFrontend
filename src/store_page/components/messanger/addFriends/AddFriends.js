import React from "react";
import "./addFriends.css";

export default function AddFriends(){

    return(
        <div className="addFriends">
            <form id="searching-friend" action="#">
                <input className="searching-friend" type="text" placeholder="Type to search for someone..."/>
                <button type="submit">Go</button>
            </form>
            <div className="suggestions">
                <button>View Suggestions</button>
                <div className="result"></div>
            </div>
        </div>
    )
}
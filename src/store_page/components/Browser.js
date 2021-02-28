import Post from "./Post";
import "./store.css";
import { useSelector } from "react-redux";

function Browser(){
    const value = useSelector(state=>state.usersData);
    return(
        <div className="browser">
            {value.posts.map((post, index)=>(<Post post={post} key={`${post.poster_name}#${index}`}/>))}
        </div>
    );
};

export default Browser;
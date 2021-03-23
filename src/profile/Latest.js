import React from 'react';
import Post from '../store_page/components/post/Post';

function Latest() {
    return (
        <div className="latest">
            <h5>Posts</h5>
            <div className="posts">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Latest;

import React from 'react';
import postCSS from './MyPost.module.css';

const Post = (props) => {
    return (
        <div className={postCSS.item}>
            <div>
                <img
                    src={props.url}
                    alt="post_pic"/>
                <span>
                    {props.message}
                </span>
                <div>
                    <span>
                        Likes {props.likesCount}_/_
                    </span>
                    <span>
                        Dislikes {props.dislikesCount}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post;

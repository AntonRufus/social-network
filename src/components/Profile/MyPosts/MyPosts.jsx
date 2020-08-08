import React from 'react';
import postsCSS from './MyPosts.module.css';
import Post from "./Post/MyPost";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message}
                                                      likesCount={post.likesCount}
                                                      dislikesCount={post.dislikesCount}
                                                      url={post.url}/>);

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.addPost();
        console.log(props.posts)
    }

    function onPostChange() {
        let postUpdatedValue = newPostElement.current.value;
        props.updateNewPostText(postUpdatedValue);
        console.log(postUpdatedValue);
    }

    return (
        <div className={postsCSS.my_posts_main}>
            <div className={postsCSS.my_posts_label}>
                <h3>MY POSTS</h3>
            </div>
            <div className={postsCSS.textarea}>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}
                          name="text" id="new-post" cols="30" rows="1"/>
                <div className={postsCSS.buttons}>
                    <button onClick={addNewPost}
                            className={postsCSS.button}>
                        Add post
                    </button>
                    <button className={postsCSS.button}>Remove</button>
                </div>
            </div>
            <div className={postsCSS.posts_block}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

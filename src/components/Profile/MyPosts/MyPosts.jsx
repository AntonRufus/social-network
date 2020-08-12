import React from 'react';
import postsCSS from './MyPosts.module.css';
import Post from "./Post/MyPost";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message}
                                                      likesCount={post.likesCount}
                                                      dislikesCount={post.dislikesCount}
                                                      url={post.url}/>);

    let newPostElement = React.createRef();

    let onAddNewPost = () => {
        props.addNewPost();
    }

    let onClearNewPostArea = () => {
        props.clearPostArea();
    }

    function onPostChange() {
        let postUpdatedValue = newPostElement.current.value;
        props.updateNewPostText(postUpdatedValue);
    }

    return (
        <div className={postsCSS.my_posts_main}>
            <div className={postsCSS.my_posts_label}>
                <h3>MY POSTS</h3>
            </div>
            <div className={postsCSS.textarea}>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          placeholder={'Enter your post'}
                          value={props.newPostText}
                          name="text" id="new-post" cols="30" rows="1"/>
                <div className={postsCSS.buttons}>
                    <button onClick={onAddNewPost}
                            className={postsCSS.button}>
                        Add post
                    </button>
                    <button onClick={onClearNewPostArea}
                            className={postsCSS.button}>
                        Clear
                    </button>
                </div>
            </div>
            <div className={postsCSS.posts_block}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

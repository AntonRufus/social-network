import React from 'react';
import postsCSS from './MyPosts.module.css';
import Post from "./Post/MyPost";
import {
    addPostActionCreator,
    clearPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message}
                                                      likesCount={post.likesCount}
                                                      dislikesCount={post.dislikesCount}
                                                      url={post.url}/>);

    let newPostElement = React.createRef();

    let clearNewPostArea = () => {
        props.dispatch(clearPostActionCreator());
        console.log(props.posts)
    }

    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
        console.log(props.posts)
    }

    function onPostChange() {
        let postUpdatedValue = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(postUpdatedValue));
        console.log(postUpdatedValue);
    }

    return (
        <MyPosts />
    )
}

export default MyPostsContainer;

import React from 'react';
import {
    addPost,
    clearPost,
    updateNewPostText
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (postUpdatedValue) => {
            dispatch(updateNewPostText(postUpdatedValue))
        },
        addNewPost: () => {
            dispatch(addPost())
        },
        clearPostArea: () => {
            dispatch(clearPost())
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

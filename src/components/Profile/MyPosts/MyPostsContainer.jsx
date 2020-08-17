import React from 'react';
import {
    addPostActionCreator,
    clearPostActionCreator,
    updateNewPostTextActionCreator
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
            dispatch(updateNewPostTextActionCreator(postUpdatedValue))
        },
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        clearPostArea: () => {
            dispatch(clearPostActionCreator())
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

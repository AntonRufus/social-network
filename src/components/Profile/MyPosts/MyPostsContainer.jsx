import React from 'react';
import {
    addPostAC,
    clearPostAC,
    updateNewPostTextAC
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
            dispatch(updateNewPostTextAC(postUpdatedValue))
        },
        addNewPost: () => {
            dispatch(addPostAC())
        },
        clearPostArea: () => {
            dispatch(clearPostAC())
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

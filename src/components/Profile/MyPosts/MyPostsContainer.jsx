import React from 'react';
import {
    addPostActionCreator,
    clearPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let clearNewPostArea = () => {
        let action = clearPostActionCreator();
        props.store.dispatch(action);
    }

    let addNewPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    function postChange(postUpdatedValue) {
        let action = updateNewPostTextActionCreator(postUpdatedValue);
        props.store.dispatch(action);
    }

    return (
        <StoreContext.Consumer> {
            (store) => (
                <MyPosts updateNewPostText={postChange}
                         addNewPost={addNewPost}
                         clearPostArea={clearNewPostArea}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}
                />
            )
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

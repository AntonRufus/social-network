import React from 'react';
import StoreContext from "../../../StoreContext";
import {
    addPostActionCreator,
    clearPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let clearNewPostArea = () => {
                        let action = clearPostActionCreator();
                        store.dispatch(action);
                    }

                    let addNewPost = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    }

                    function postChange(postUpdatedValue) {
                        let action = updateNewPostTextActionCreator(postUpdatedValue);
                        store.dispatch(action);
                    }

                    return <MyPosts updateNewPostText={postChange}
                                    addNewPost={addNewPost}
                                    clearPostArea={clearNewPostArea}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

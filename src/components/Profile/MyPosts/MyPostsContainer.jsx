import React from 'react';
import {
    addPostActionCreator,
    clearPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*import StoreContext from "../../../StoreContext";
const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let clearNewPostArea = () => {
                        store.dispatch(clearPostActionCreator());
                    }
                    let addNewPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    function postChange(postUpdatedValue) {
                        store.dispatch(updateNewPostTextActionCreator(postUpdatedValue));
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
}*/

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

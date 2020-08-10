const ADD_POST = 'ADD-POST';
const CLEAR_POST = 'CLEAR-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: state.likesCountDefault,
                dislikesCount: state.dislikesCountDefault,
                url: state.urlDefault,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break;
        case CLEAR_POST:
            state.newPostText = '';
            break;
    }

    return state;
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (postUpdatedValue) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: postUpdatedValue,
});

export const clearPostActionCreator = () => ({
    type: CLEAR_POST,
});

export default profileReducer;

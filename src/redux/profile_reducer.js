import { profileAPI, usersAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
// import antPortrait from './../assets/images/antPortrait.jpg';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hello!',
            likesCount: 1005,
            dislikesCount: 105,
            url: 'https://pixy.org/src/480/thumbs190/4800648.jpg'
        },
        {
            id: 2,
            message: 'How"re you?',
            likesCount: 100500,
            dislikesCount: 1050,
            url: 'https://cache.desktopnexus.com/thumbseg/1753/1753481-bigthumbnail.jpg'
        },
        {
            id: 3,
            message: 'How"s your life?',
            likesCount: 1050,
            dislikesCount: 150,
            url: 'https://hdwallsbox.com/wallpapers/m/12/nature-flowers-macro-m11645.jpg'
        },
        {
            id: 4,
            message: 'How"s your day?',
            likesCount: 150,
            dislikesCount: 15,
            url: 'https://avatars.mds.yandex.net/get-pdb/1590269/e908d30d-87d8-47e8-9c56-c5d92fd9ff79/s375'
        }
    ],
    likesCountDefault: 10,
    dislikesCountDefault: 1,
    urlDefault:
        'https://images.unsplash.com/photo-1634988115790-d00c024dfac0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    // urlDefault: antPortrait,
    profile: null,
    status: 'default status'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: state.likesCountDefault,
                dislikesCount: state.dislikesCountDefault,
                url: state.urlDefault
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId)
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    // try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
    // } catch (error) {
    //catch an error
    //dispatch an error and display it as a message
    // }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
        // dispatch(stopSubmit('edit-profile', {'contacts':{'facebook': response.data.messages[0]}}));
    }
};

export default profileReducer;

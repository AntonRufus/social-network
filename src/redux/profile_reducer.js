const ADD_POST = 'ADD-POST';
const CLEAR_POST = 'CLEAR-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
    newPostText: 'Default Post Text',
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
        },
    ],
    likesCountDefault: 10,
    dislikesCountDefault: 1,
    urlDefault: 'https://www.akibanation.com/wp-content/uploads/2016/07/Kon.BLEACH.full_.170410-150x150.jpg',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: state.likesCountDefault,
                dislikesCount: state.dislikesCountDefault,
                url: state.urlDefault,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            }
        case CLEAR_POST:
            return {
                ...state,
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
};

export const addPostAC = () => ({type: ADD_POST});

export const updateNewPostTextAC = (postUpdatedValue) => ({type: UPDATE_NEW_POST_TEXT, newPostText: postUpdatedValue});

export const clearPostAC = () => ({type: CLEAR_POST});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;

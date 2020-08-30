import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetchingAuth: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetchingAuth: action.isFetchingAuth
            }
        default:
            return state;
    }
};

export const setAuthUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}});

export const toggleIsFetching = (isFetchingAuth) => ({type: TOGGLE_IS_FETCHING, isFetchingAuth});

export const getAuthUserData = () => (dispatch) => (
    authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    dispatch(setAuthUserData(email, id, login));
                    dispatch(toggleIsFetching(false));
                }
            }
        ))

export default authReducer;

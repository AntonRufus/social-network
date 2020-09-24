import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'social-network/auth/TOGGLE_IS_FETCHING';

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
                ...action.payload,
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

export const setAuthUserData = (email, id, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {email, id, login, isAuth}
});

export const toggleIsFetching = (isFetchingAuth) => ({type: TOGGLE_IS_FETCHING, isFetchingAuth});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data;
        dispatch(toggleIsFetching(false));
        dispatch(setAuthUserData(email, id, login, true));
    }
};

/*
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    dispatch(toggleIsFetching(false));
                    dispatch(setAuthUserData(email, id, login, true));
                }
            }
        )
};
*/

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

/*
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', {_error: message}));
                }
            }
        )
};
*/

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;

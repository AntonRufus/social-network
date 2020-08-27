const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (email, id, login) => ({type: SET_USER_DATA, data: {email, id, login}});

export default authReducer;

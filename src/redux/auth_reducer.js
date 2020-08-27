const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
};

export const setUserData = (userId, email, id) => ({type: SET_USER_DATA, data: {userId, email, id}});

export default authReducer;

import {getAuthUserData} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {initialized: false/*, globalError: null*/};
//show up on the screen error message

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
                // globalError: ???
            }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    /*promise.then(() => {
        dispatch(initializedSuccess());
    });*/
    /*let promise1 = dispatch(somethingElse());
    let promise2 = dispatch(somethingElse());*/
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;

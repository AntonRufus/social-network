import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
});

let store = createStore(reducers);

export default store;

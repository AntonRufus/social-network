import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     sendMessageOut={store.sendMessageOut.bind(store)}
                     updateNewMessageOut={store.updateNewMessageOut.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

/*  If you want your app to work offline and load faster, you can change
    unregister() to register() below. Note this comes with some pitfalls.
    Learn more about service workers: https://bit.ly/CRA-PWA    */
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

/*
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
*/

/*  If you want your app to work offline and load faster, you can change
    unregister() to register() below. Note this comes with some pitfalls.
    Learn more about service workers: https://bit.ly/CRA-PWA    */
serviceWorker.unregister();

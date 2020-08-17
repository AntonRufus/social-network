import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import App from "./App";
import './index.css';
import store from "./redux/redux-store";

/*let rerenderEntireTree = () => {
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
});*/

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

serviceWorker.unregister();
/*  If you want your app to work offline and load faster, you can change
    unregister() to register() below. Note this comes with some pitfalls.
    Learn more about service workers: https://bit.ly/CRA-PWA */

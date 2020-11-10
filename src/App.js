import React from 'react';
import appCSS from './App.module.css';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {HashRouter, Switch} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux_store";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Followers = React.lazy(() => import('./components/Users/Followers'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
        console.error(promiseRejectionEvent);
        console.error(reason);
        alert('Some error occurred');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return <div className={appCSS.app_wrapper}>
            <div className={appCSS.header}>
                <HeaderContainer/>
            </div>
            <div className={appCSS.nav}>
                <NavBarContainer/>
            </div>
            <div className={appCSS.app_wrapper_content}>
                {/*<Switch>*/}
                <div className={appCSS.content_wrapper}>
                    <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/followers' render={withSuspense(Followers)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/news' render={withSuspense(News)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/music' render={withSuspense(Music)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/settings' render={withSuspense(Settings)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/friends' render={withSuspense(FriendsContainer)}/>
                </div>
                <div className={appCSS.content_wrapper}>
                    <Route path='/login' render={withSuspense(Login)}/>
                </div>
                {/*<div className={appCSS.content_wrapper}>
                        <Route path='*' render={() => <div>404 not found</div>}/>
                    </div>*/}
                {/*</Switch>*/}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized});

// export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const NetworkApp = () => {
    // return <HashRouter>
    // return <BrowserRouter>
    // return <BrowserRouter basename={process.env.PUBLIC_URL}>>
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default NetworkApp;

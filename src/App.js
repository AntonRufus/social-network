import React from 'react';
import appCSS from './App.module.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <div className={appCSS.app_wrapper}>
            <div className={appCSS.header}>
                <Header/>
            </div>
            <div className={appCSS.nav}>
                <NavBar sideBar={props.state.sideBar}/>
            </div>
            <div className={appCSS.app_wrapper_content}>
                <div className={appCSS.profile_wrapper}>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  newPostText={props.state.profilePage.newPostText}
                                                  dispatch={props.dispatch}/>}/>
                </div>
                <div className={appCSS.dialogs_wrapper}>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                  newMessageText={props.state.dialogsPage.newMessageText}
                                                  dispatch={props.dispatch}/>}/>
                </div>
                <div className={appCSS.news_wrapper}>
                    <Route path='/news' component={News}/>
                </div>
                <div className={appCSS.music_wrapper}>
                    <Route path='/music' component={Music}/>
                </div>
                <div className={appCSS.settings_wrapper}>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import appCSS from './App.module.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";

const App = () => {
    return (
        <div className={appCSS.app_wrapper}>
            <div className={appCSS.header}>
                <Header/>
            </div>
            <div className={appCSS.nav}>
                <NavBarContainer/>
            </div>
            <div className={appCSS.app_wrapper_content}>
                <div className={appCSS.profile_wrapper}>
                    <Route path='/profile'
                           render={() => <Profile
                           />}/>
                </div>
                <div className={appCSS.dialogs_wrapper}>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                           />}/>
                </div>
                <div className={appCSS.news_wrapper}>
                    <Route path='/news' component={News}/>
                </div>
                <div className={appCSS.music_wrapper}>
                    <Route path='/music' component={Music}/>
                </div>
                <div className={appCSS.users_wrapper}>
                    <Route path='/users'
                           render={() => <UsersContainer
                           />}/>{/*
                    <Route path='/users/Sub Zero'
                           render={() => <UserSubZero
                           />}/>*/}
                    {/*<Route path='/users/Kabal'
                           render={() => <UserKabal
                           />}/>*/}

                </div>
                <div className={appCSS.settings_wrapper}>
                    <Route path='/settings' component={Settings}/>
                </div>
                <div className={appCSS.friends_wrapper}>
                    <Route path='/friends'
                           render={() => <FriendsContainer
                           />}/>
                </div>
            </div>
        </div>
    );
}

export default App;

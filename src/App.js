import React from 'react';
import appCSS from './App.module.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";
import UsersRouter from "./components/Users/UsersRouter";
import UsersList from "./components/Users/UsersList";

const App = () => {
    return (
        <div className={appCSS.app_wrapper}>
            <div className={appCSS.header}>
                <HeaderContainer/>
            </div>
            <div className={appCSS.nav}>
                <NavBarContainer/>
            </div>
            <div className={appCSS.app_wrapper_content}>
                <div className={appCSS.profile_wrapper}>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                           />}/>
                </div>
                {/*<div className={appCSS.profile_wrapper}>
                    <Route path='/:userId?'
                           render={() => <ProfileContainer
                           />}/>
                </div>*/}
                <div className={appCSS.dialogs_wrapper}>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                           />}/>
                </div>
                <div className={appCSS.users_wrapper}>
                    <Route path='/users'
                           render={() => <UsersContainer
                           />}/>
                    {/*<Route path='/users_list'
                           render={() => <UsersList
                           />}/>
                    <UsersRouter/>*/}
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

import React from 'react';
import appCSS from './App.module.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";
// import UserFollowed from "./components/Users/UserFollowed";

const App = () => {
    return <div className={appCSS.app_wrapper}>
        <div className={appCSS.header}>
            <HeaderContainer/>
        </div>
        <div className={appCSS.nav}>
            <NavBarContainer/>
        </div>
        <div className={appCSS.app_wrapper_content}>
            <div className={appCSS.content_wrapper}>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer
                       />}/>
                {/*userId is not detecting*/}
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                       />}/>
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/users'
                       render={() => <UsersContainer
                       />}/>
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/usersFollowed'
                    /*render={() => <UserFollowed
                    />}*//>
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/news' component={News}/>
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/music' component={Music}/>
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/settings' component={Settings}/>
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/friends'
                       render={() => <FriendsContainer
                       />}/>
            </div>
            <div className={appCSS.content_wrapper}>
                <Route path='/login'
                       render={() => <Login
                       />}/>
            </div>
        </div>
    </div>
}

export default App;

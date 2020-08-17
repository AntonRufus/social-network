import React from 'react';
import navCSS from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import NavBarFriends from "./NavBarFriends/NavBarFriends";

const NavBar = (props) => {

    let state = props.dialogsPage;

    let friendsShortList = state.dialogs
        .map(dialog => <NavBarFriends url={dialog.photoUrl}
                                      name={dialog.name}
                                      id={dialog.id}/>);

    return (
        <nav>
            <div className={navCSS.item}>
                <NavLink to='/profile'
                         activeClassName={navCSS.activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={navCSS.item}>
                <NavLink to='/dialogs'
                         activeClassName={navCSS.activeLink}>
                    Messages
                </NavLink>
            </div>
            <div className={navCSS.item}>
                <NavLink to='/news'
                         activeClassName={navCSS.activeLink}>
                    News
                </NavLink>
            </div>
            <div className={navCSS.item}>
                <NavLink to='/music'
                         activeClassName={navCSS.activeLink}>
                    Music
                </NavLink>
            </div>
            <br/>
            <div className={`${navCSS.item} ${navCSS.bold}`}>
                <NavLink to='/settings'
                         activeClassName={navCSS.activeLink}>
                    Settings
                </NavLink>
            </div>
            <br/>
            <div className={navCSS.friends}>
                <NavLink to='/friends'
                         activeClassName={navCSS.activeLink}>
                    <b>FRIENDS</b>
                </NavLink>
            </div>
            <div className={navCSS.avatar_block}>
                <div className={navCSS.avatars_top}>
                    {/*{props.friendsShortList}*/}
                    {friendsShortList[5]}
                    {friendsShortList[1]}
                    {friendsShortList[15]}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

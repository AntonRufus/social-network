import React from 'react';
import navCSS from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const Avatars = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;

    return (
        <div className={navCSS.avatar_block}>
            <div className={navCSS.avatar_photo}>
                <img src={props.url} alt=""/>
            </div>
            <div className={navCSS.avatar_name}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}

const NavBar = (props) => {

    let avatarsElements = props.sideBar.dialogs
        .map(dialog => <Avatars url={dialog.photoUrl}
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
                <h3>FRIENDS</h3>
                </NavLink>
            </div>
            <div className={navCSS.avatars_top}>
                {avatarsElements[3]}
                {avatarsElements[0]}
                {avatarsElements[2]}
            </div>
        </nav>
    )
}

export default NavBar;

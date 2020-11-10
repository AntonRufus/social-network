import React from 'react';
import navFrCSS from './NavBarFriends.module.css'
import {NavLink} from "react-router-dom";
import classNames from 'classnames';

const NavBarFriends = ({id, url, name}) => {
    let path = '/dialogs/' + id;

    return (
        <div className={navFrCSS.avatar_block}>
            <div className={navFrCSS.avatar_photo}>
                <NavLink to={path}>
                    <img src={url} alt=""/>
                </NavLink>
            </div>
            {/*<div className={navFrCSS.avatar_name + ' ' + navFrCSS.avatar_active}>*/}
            <div className={classNames(navFrCSS.avatar_name, navFrCSS.avatar_active)}>
                <NavLink to={path}>
                    {name}
                </NavLink>
            </div>
        </div>
    )
}

export default NavBarFriends;

import React from 'react';
import navFrCSS from './NavBarFriends.module.css'
import {NavLink} from "react-router-dom";

const NavBarFriends = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;

    return (
        <div className={navFrCSS.avatar_block}>
            <div className={navFrCSS.avatar_photo}>
                <NavLink to={path}>
                    <img src={props.url} alt=""/>
                </NavLink>
            </div>
            <div className={navFrCSS.avatar_name + ' ' + navFrCSS.avatar_active}>
                <NavLink to={path}>
                    {name}
                </NavLink>
            </div>
        </div>
    )
}

export default NavBarFriends;

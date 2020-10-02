import React from 'react';
import frListCSS from './FriendsList.module.css'
import {NavLink} from "react-router-dom";

const FriendsList = ({id, name, url}) => {
    let path = '/dialogs/' + id;

    return (
        <div className={frListCSS.avatar_block}>
            <div className={frListCSS.avatar_photo}>
                <NavLink to={path}>
                    <img src={url} alt=""/>
                </NavLink>
            </div>
            <div className={frListCSS.avatar_name}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}

export default FriendsList;

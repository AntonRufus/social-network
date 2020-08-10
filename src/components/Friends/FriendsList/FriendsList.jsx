import React from 'react';
import frListCSS from './FriendsList.module.css'
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;

    return (
        <div className={frListCSS.avatar_block}>
            <div className={frListCSS.avatar_photo}>
                <NavLink to={path}>
                <img src={props.url} alt=""/>
                </NavLink>
            </div>
            <div className={frListCSS.avatar_name}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}

export default FriendsList;

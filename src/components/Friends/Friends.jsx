import React from 'react';
import friendsCSS from './Friends.module.css'
import {NavLink} from "react-router-dom";

//make separate component file fo Avatars, change name ot Friends list
//make the same for NavBar
//base these components on store_state.dialogs and maybe change 'dialogs' to friendsList

const Avatars = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;

    return (
        <div className={friendsCSS.avatar_block}>
            <div className={friendsCSS.avatar_photo}>
                <img src={props.url} alt=""/>
            </div>
            <div className={friendsCSS.avatar_name}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}

const Friends = (props) => {
    let avatarsElements = props.dialogsPage.dialogs
        .map(dialog => <Avatars url={dialog.photoUrl}
                                name={dialog.name}
                                id={dialog.id}/>);
    return (
        <div className={friendsCSS.friends}>
            <h3>My friends list </h3>
            {avatarsElements}
        </div>
    )
}

export default Friends;

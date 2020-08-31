import React from 'react';
import friendsCSS from './Friends.module.css'
import FriendsList from "./FriendsList/FriendsList";

const Friends = (props) => {
    let state = props.dialogsPage;

    let avatarsElements = state.dialogs
        .map(dialog =>
            <FriendsList url={dialog.photoUrl}
                         name={dialog.name}
                         id={dialog.id}
                         key={dialog.id}
            />
        );

    return (
        <div className={friendsCSS.friends}>
            <h3>My friends list </h3>
            {/*take users which i follow*/}
            {avatarsElements}
        </div>
    )
}

export default Friends;

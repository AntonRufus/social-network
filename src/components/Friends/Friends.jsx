import React from 'react';
import friendsCSS from './Friends.module.css'
import FriendsList from "./FriendsList/FriendsList";

const Friends = (props) => {
    let avatarsElements = props.dialogsPage.dialogs
        .map(dialog => <FriendsList url={dialog.photoUrl}
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

import React from 'react';
import friendsCSS from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={friendsCSS.friends}>
            <h3>My friends list </h3>
            {props.avatarsElements}
        </div>
    )
}

export default Friends;

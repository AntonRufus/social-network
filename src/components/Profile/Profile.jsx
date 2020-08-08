import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import profileCSS from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={profileCSS.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;

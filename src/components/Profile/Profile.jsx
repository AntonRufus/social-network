import React from 'react';
import profileCSS from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={profileCSS.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

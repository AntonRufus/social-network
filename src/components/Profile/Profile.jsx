import React from 'react';
import profileCSS from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return <>
        <div className={profileCSS.profile}>
            <ProfileInfo savePhoto={savePhoto}
                         isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>
    </>
}

export default Profile;

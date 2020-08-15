import React from 'react';
import profileCSS from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={profileCSS.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPostsContainer store={props.store}/>*/}
        </div>
    )
}

export default Profile;

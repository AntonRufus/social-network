import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileContacts from "./ProfileData";
import ProfileJob from "./ProfileJob";
import ProfileUserIdAndPhoto from "./ProfileUserIdAndPhoto";
import ProfileNameAndStatus from "./ProfileNameAndStatus";
import ProfileBgcPhoto from "./ProfileBgcPhoto";
import ProfileAvatar from "./ProfileAvatar";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    return <>
        <div className={profInfoCSS.profile_block}>
            <ProfileBgcPhoto/>
            <div className={profInfoCSS.profile_description}>
                <ProfileAvatar profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
                <div className={profInfoCSS.info_main_block}>
                    <div className={profInfoCSS.info_block}>
                        <ProfileNameAndStatus profile={profile} status={status} updateStatus={updateStatus}/>
                        <div className={profInfoCSS.info_main}>
                            <ProfileContacts profile={profile} />
                            <ProfileJob profile={profile}/>
                            <ProfileUserIdAndPhoto profile={profile}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProfileInfo;

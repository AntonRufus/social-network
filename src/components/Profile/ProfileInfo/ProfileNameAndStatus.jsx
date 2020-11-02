import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {Contact} from "./ProfileContacts";

const ProfileNameAndStatus = ({profile, status, updateStatus}) => {
    let no = 'no detailed information';
    let aboutMe = profile.aboutMe;


    return <>
        <div className={profInfoCSS.name}>
            <div className={profInfoCSS.info_name}>
                Nickname:
                <div className={profInfoCSS.info_data}>
                    <span>{profile.fullName === null ? no : profile.fullName}</span>
                </div>
            </div>
            <div className={profInfoCSS.status_block}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <Contact contactTitle={'About me'} contactValue={aboutMe}/>
        </div>

    </>
}

export default ProfileNameAndStatus;

import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import ProfileJob from "./ProfileJob";
import ProfileContacts from "./ProfileContacts";
import ProfileNameAndStatus from "./ProfileNameAndStatus";

const ProfileData = ({profile, isOwner, setEditMode, status, updateStatus}) => {
    return <>
        {isOwner && <div>
            <button className={profInfoCSS.buttonEdit} onClick={() => {
                setEditMode(true);
            }}>
                edit
            </button>
        </div>}
        <ProfileNameAndStatus profile={profile}
                              status={status}
                              updateStatus={updateStatus}
                              isOwner={isOwner}
                              setEditMode={setEditMode}/>
        <ProfileContacts profile={profile}/>
        <ProfileJob profile={profile}/>
    </>
}

export default ProfileData;

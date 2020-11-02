import React from 'react';
import ProfileJob from "./ProfileJob";
import ProfileContacts from "./ProfileContacts";

const ProfileData = ({profile, isOwner, setEditMode}) => {
    return <>
        <ProfileContacts profile={profile}
                         isOwner={isOwner}
                         goToEditMode={() => {
                             setEditMode(true);
                         }}
        />

        <ProfileJob profile={profile}
                    isOwner={isOwner}
                    goToEditMode={() => {
                        setEditMode(true);
                    }}
        />
    </>
}

export default ProfileData;

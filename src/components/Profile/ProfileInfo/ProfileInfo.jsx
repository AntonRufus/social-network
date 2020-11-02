import React, {useState} from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileUserIdAndPhoto from "./ProfileUserIdAndPhoto";
import ProfileBgcPhoto from "./ProfileBgcPhoto";
import ProfileAvatar from "./ProfileAvatar";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    let [editMode, setEditMode] = useState(false);

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
                        {editMode
                            ? <ProfileDataForm profile={profile}
                                               status={status}
                                               updateStatus={updateStatus}/>
                            : <ProfileData profile={profile}
                                           isOwner={isOwner}
                                           setEditMode={setEditMode}
                                           status={status}
                                           updateStatus={updateStatus}/>
                        }
                        <ProfileUserIdAndPhoto profile={profile}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProfileInfo;

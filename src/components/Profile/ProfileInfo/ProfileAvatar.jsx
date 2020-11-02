import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import antPortrait from '../../../assets/images/antPortrait.jpg';

const ProfileAvatar = ({profile, isOwner, savePhoto}) => {
    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    }

    return <>
        <div className={profInfoCSS.avatar_block}>
            <br/>
            <img className={profInfoCSS.avatar}
                /*src={profile.photos.large
                    ? profile.photos.large
                    : antPortrait}*/
                 src={profile.photos.large
                 || antPortrait}
                 alt='avatar'/>
            <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
        </div>
    </>
}

export default ProfileAvatar;

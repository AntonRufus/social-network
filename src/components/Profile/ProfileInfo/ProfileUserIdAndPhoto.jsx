import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';

export const ProfileUserIdAndPhoto = ({profile}) => {
    let userId = profile.userId;
    let photosLarge = profile.photos.large;
    let photosSmall = profile.photos.small;

    const PhotoLink = ({sing, size}) => {
        return <>
            <div className={profInfoCSS.info}>
                {sing}:
                <div className={profInfoCSS.info_data}>
                    <a href={size} target='_blank'
                       rel='noopener noreferrer'>{size ? 'link' : 'no photo'}</a>
                </div>
            </div>
        </>
    }

    return <>
        <div className={profInfoCSS.info}>
            User ID:
            <div className={profInfoCSS.info_data}>
                <span>{userId}</span>
            </div>
        </div>
        <PhotoLink sing={'Photo large'} size={photosLarge}/>
        <PhotoLink sing={'Photo small'} size={photosSmall}/>
        <br/>
    </>
}

export default ProfileUserIdAndPhoto;

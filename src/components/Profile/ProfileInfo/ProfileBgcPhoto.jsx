import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';

const ProfileBgcPhoto = () => {
    return <>
        <div className={profInfoCSS.profile_block}>
            <img className={profInfoCSS.bgc_photo}
                 src='/social-network/pic/bgc200.jpg'
                 alt='backgroundPic'/>
        </div>
    </>
}

export default ProfileBgcPhoto;

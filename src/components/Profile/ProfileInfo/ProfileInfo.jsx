import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import booleanPhotoTrue from "../../../assets/images/booleanPhotoTrue.png";
import booleanPhotoFalse from "../../../assets/images/booleanPhotoFalse.png";
import antPortrait from '../../../assets/images/antPortrait.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={profInfoCSS.profile_block}>
            <div>
                <img className={profInfoCSS.bgc_photo}
                     src='http://localhost:3000/pic/bgc200.jpg'
                     alt='backgroundPic'/>
            </div>
            <div className={profInfoCSS.profile_description}>
                <div className={profInfoCSS.avatar_block}>
                    <img className={profInfoCSS.avatar}
                         src={profile.photos.large
                             ? profile.photos.large
                             : antPortrait}
                         alt='avatar'/>
                </div>
                <div className={profInfoCSS.info_main_block}>
                    <div className={profInfoCSS.info_block}>
                        <div className={profInfoCSS.name}>
                            <div className={profInfoCSS.info_name}>
                                Name:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.fullName === null ? 'no detailed information' : profile.fullName}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.status_block}>
                                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                            </div>
                        </div>
                        <div className={profInfoCSS.info_main}>
                            <div className={profInfoCSS.info}>
                                About me:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.aboutMe === null ? 'no detailed information' : profile.aboutMe}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                FB:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.facebook === null ? 'no detailed information' : profile.contacts.facebook}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                WebSite:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.website === null ? 'no detailed information' : profile.contacts.website}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                VK:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.vk === null ? 'no detailed information' : profile.contacts.vk}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Twitter:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.twitter === null ? 'no detailed information' : profile.contacts.twitter}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Instagram:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.instagram === null ? 'no detailed information' : profile.contacts.instagram}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                youtube:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.youtube === null ? 'no detailed information' : profile.contacts.youtube}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                github:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.github === null ? 'no detailed information' : profile.contacts.github}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                mainLink:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.contacts.mainLink === null ? 'no detailed information' : profile.contacts.mainLink}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                Looking for a job:
                                <div className={profInfoCSS.info_data}>
                                    <span>
                                        {profile.lookingForAJob === true ? 'true' : 'false'}
                                        <img
                                            src={profile.lookingForAJob === true ? booleanPhotoTrue : booleanPhotoFalse}
                                            className={profInfoCSS.booleanPhoto} alt='boolean'/>
                                    </span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Job descriptions:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.lookingForAJobDescription === null ? 'no detailed information' : profile.lookingForAJobDescription}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                User ID:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.userId}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Photo large:
                                <div className={profInfoCSS.info_data}>
                                    <a href={profile.photos.large} target='_blank'
                                       rel='noopener noreferrer'>link</a>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Photo small:
                                <div className={profInfoCSS.info_data}>
                                    <a href={profile.photos.small} target='_blank'
                                       rel='noopener noreferrer'>link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;

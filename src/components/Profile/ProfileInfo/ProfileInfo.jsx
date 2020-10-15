import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import booleanPhotoTrue from "../../../assets/images/booleanPhotoTrue.png";
import booleanPhotoFalse from "../../../assets/images/booleanPhotoFalse.png";
import antPortrait from '../../../assets/images/antPortrait.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    let no = 'no detailed information';
    let aboutMe = profile.aboutMe;
    let facebook = profile.contacts.facebook;
    let website = profile.contacts.website;
    let vk = profile.contacts.vk;
    let twitter = profile.contacts.twitter;
    let instagram = profile.contacts.instagram;
    let youtube = profile.contacts.youtube;
    let github = profile.contacts.github;
    let mainLink = profile.contacts.mainLink
    let lookingForAJob = profile.lookingForAJob;
    let lookingForAJobDescription = profile.lookingForAJobDescription;
    let userId = profile.userId;
    let photosLarge = profile.photos.large;
    let photosSmall = profile.photos.small

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    }

    return (
        <div className={profInfoCSS.profile_block}>
            <div className={profInfoCSS.bgc_photo_div}>
                <img className={profInfoCSS.bgc_photo}
                     src='/social-network/pic/bgc200.jpg'
                     alt='backgroundPic'/>
            </div>
            <div className={profInfoCSS.profile_description}>
                <div className={profInfoCSS.avatar_block}>
                    <img className={profInfoCSS.avatar}
                        /*src={profile.photos.large
                            ? profile.photos.large
                            : antPortrait}*/
                         src={profile.photos.large
                         || antPortrait}
                         alt='avatar'/>
                    <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                </div>
                <div className={profInfoCSS.info_main_block}>
                    <div className={profInfoCSS.info_block}>
                        <div className={profInfoCSS.name}>
                            <div className={profInfoCSS.info_name}>
                                Name:
                                <div className={profInfoCSS.info_data}>
                                    <span>{profile.fullName === null ? no : profile.fullName}</span>
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
                                    <span>{aboutMe === null ? no : aboutMe}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                FB:
                                <div className={profInfoCSS.info_data}>
                                    <span>{facebook === null ? no : facebook}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                WebSite:
                                <div className={profInfoCSS.info_data}>
                                    <span>{website === null ? no : website}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                VK:
                                <div className={profInfoCSS.info_data}>
                                    <span>{vk === null ? no : vk}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Twitter:
                                <div className={profInfoCSS.info_data}>
                                    <span>{twitter === null ? no : twitter}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Instagram:
                                <div className={profInfoCSS.info_data}>
                                    <span>{instagram === null ? no : instagram}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                youtube:
                                <div className={profInfoCSS.info_data}>
                                    <span>{youtube === null ? no : youtube}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                github:
                                <div className={profInfoCSS.info_data}>
                                    <span>{github === null ? no : github}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                mainLink:
                                <div className={profInfoCSS.info_data}>
                                    <span>{mainLink === null ? no : mainLink}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                Looking for a job:
                                <div className={profInfoCSS.info_data}>
                                    <span>
                                        {lookingForAJob === true ? 'true' : 'false'}
                                        <img
                                            src={lookingForAJob === true ? booleanPhotoTrue : booleanPhotoFalse}
                                            className={profInfoCSS.booleanPhoto} alt='boolean'/>
                                    </span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Job descriptions:
                                <div className={profInfoCSS.info_data}>
                                    <span>{lookingForAJobDescription === null ? no : lookingForAJobDescription}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                User ID:
                                <div className={profInfoCSS.info_data}>
                                    <span>{userId}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Photo large:
                                <div className={profInfoCSS.info_data}>
                                    <a href={photosLarge} target='_blank'
                                       rel='noopener noreferrer'>{photosLarge ? 'link' : 'no photo'}</a>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Photo small:
                                <div className={profInfoCSS.info_data}>
                                    <a href={photosSmall} target='_blank'
                                       rel='noopener noreferrer'>{photosSmall ? 'link' : 'no photo'}</a>
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

import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import booleanPhotoTrue from "../../../assets/images/booleanPhotoTrue.png";
import booleanPhotoFalse from "../../../assets/images/booleanPhotoFalse.png";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={profInfoCSS.profile_block}>
            <div>
                <img className={profInfoCSS.bgc_photo}
                     src='http://localhost:3000/pic/bgc200.jpg'
                     alt='bgc-photo'/>
            </div>
            <div className={profInfoCSS.profile_description}>
                <div className={profInfoCSS.avatar_block}>
                    {/*<img className={profInfoCSS.avatar}
                         src='http://localhost:3000/pic/ronin.jpg'
                         alt='avatar'/>*/}
                    <img className={profInfoCSS.avatar}
                         src={props.profile.photos.large}
                         alt='avatar'/>
                </div>
                <div className={profInfoCSS.info_main_block}>
                    {/*<div>
                        <div className={profInfoCSS.name}>
                            <div className={profInfoCSS.info_name}>
                                Name:
                                <div className={profInfoCSS.info_data}>
                                    <input/>
                                </div>
                            </div>
                        </div>
                        <div className={profInfoCSS.info_main}>
                            <div className={profInfoCSS.info}>
                                DOB:
                                <div className={profInfoCSS.info_data}>
                                    <input/>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                City:.
                                <div className={profInfoCSS.info_data}>
                                    <input/>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Education:
                                <div className={profInfoCSS.info_data}>
                                    <input/>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                WebSite:
                                <div className={profInfoCSS.info_data}>
                                    https://
                                    <input type="text" defaultValue={'github.com/AntonRufus'}/>
                                    /newMaster
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <div className={profInfoCSS.info_block}>
                        <div className={profInfoCSS.name}>
                            <div className={profInfoCSS.info_name}>
                                Name:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.fullName === null ? 'no detailed information' : props.profile.fullName}</span>
                                </div>
                            </div>
                        </div>
                        <div className={profInfoCSS.info_main}>
                            <div className={profInfoCSS.info}>
                                About me:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.aboutMe === null ? 'no detailed information' : props.profile.aboutMe}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                FB:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.facebook === null ? 'no detailed information' : props.profile.contacts.facebook}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                WebSite:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.website === null ? 'no detailed information' : props.profile.contacts.website}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                VK:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.vk === null ? 'no detailed information' : props.profile.contacts.vk}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Twitter:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.twitter === null ? 'no detailed information' : props.profile.contacts.twitter}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Instagram:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.instagram === null ? 'no detailed information' : props.profile.contacts.instagram}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                youtube:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.youtube === null ? 'no detailed information' : props.profile.contacts.youtube}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                github:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.github === null ? 'no detailed information' : props.profile.contacts.github}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                mainLink:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.contacts.mainLink === null ? 'no detailed information' : props.profile.contacts.mainLink}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                Looking for a job:
                                <div className={profInfoCSS.info_data}>
                                    <span>
                                        {props.profile.lookingForAJob === true ? 'true' : 'false' }
                                        <img src={props.profile.lookingForAJob === true ? booleanPhotoTrue : booleanPhotoFalse}
                                             className={profInfoCSS.booleanPhoto} alt='boolean'/>
                                    </span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Job descriptions:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.lookingForAJobDescription === null ? 'no detailed information' : props.profile.lookingForAJobDescription}</span>
                                </div>
                            </div>
                            <br/>
                            <div className={profInfoCSS.info}>
                                User ID:
                                <div className={profInfoCSS.info_data}>
                                    <span>{props.profile.userId}</span>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Photo large:
                                <div className={profInfoCSS.info_data}>
                                    <a href={props.profile.photos.large} target='_blank'>link</a>
                                </div>
                            </div>
                            <div className={profInfoCSS.info}>
                                Photo small:
                                <div className={profInfoCSS.info_data}>
                                    <a href={props.profile.photos.small} target='_blank'>link</a>
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

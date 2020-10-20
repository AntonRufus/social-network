import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';
import booleanPhotoTrue from "../../../assets/images/booleanPhotoTrue.png";
import booleanPhotoFalse from "../../../assets/images/booleanPhotoFalse.png";

const ProfileJob = ({profile}) => {
    let no = 'no detailed information';
    let lookingForAJob = profile.lookingForAJob;
    let lookingForAJobDescription = profile.lookingForAJobDescription;

    return <>
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
            My skills:
            <div className={profInfoCSS.info_data}>
                <span>{lookingForAJobDescription === null ? no : lookingForAJobDescription}</span>
            </div>
        </div>
        <br/>
    </>
}

export default ProfileJob;

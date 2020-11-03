import React from 'react';
import profInfoCSS from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileDataForm = ({isOwner, status, updateStatus, handleSubmit, profile, setEditMode}) => {
    return <form onSubmit={handleSubmit} className={profInfoCSS.form}>
        {!isOwner && <div>
            <button className={profInfoCSS.buttonEdit}>
                {/*<button className={profInfoCSS.buttonEdit} onClick={() => {
                    setEditMode(false);
                }}>*/}
                save
            </button>
        </div>}
        <div className={profInfoCSS.name}>
            <div className={profInfoCSS.info_name}>
                Full name:
                <div className={profInfoCSS.info_data}>
                    <span>{createField('text', 'Full name', 'FullName', [], Input)}</span>
                </div>
            </div>
            <div className={profInfoCSS.status_block}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <Contact contactTitle={'About me'} contactValue={createField('text', 'About me', 'AboutMe', [], Input)}/>
        </div>
        <br/>
        <div>
            <Contact contactTitle={'FB'} contactValue={createField('text', 'Facebook', 'facebook', [], Input)}/>
            <Contact contactTitle={'WebSite'} contactValue={createField('text', 'WebSite', 'website', [], Input)}/>
            <Contact contactTitle={'VK'} contactValue={createField('text', 'VK', 'vk', [], Input)}/>
            <Contact contactTitle={'Twitter'} contactValue={createField('text', 'Twitter', 'twitter', [], Input)}/>
            <Contact contactTitle={'Instagram'}
                     contactValue={createField('text', 'Instagram', 'instagram', [], Input)}/>
            <Contact contactTitle={'YouTube'} contactValue={createField('text', 'YouTube', 'youtube', [], Input)}/>
            <Contact contactTitle={'GitHub'} contactValue={createField('text', 'GitHub', 'github', [], Input)}/>
            <Contact contactTitle={'Main Link'}
                     contactValue={createField('text', 'Main Link', 'MainLink', [], Input)}/>
        </div>
        <br/>
        <div className={profInfoCSS.info}>
            Looking for a job:
            <div className={profInfoCSS.info_data}>
                    <span>
                        {createField('checkbox', '', 'LookingForAJob', [], Input)}
                    </span>
            </div>
        </div>
        <div className={profInfoCSS.info}>
            My skills:
            <div className={profInfoCSS.info_data}>
                <span>{createField('text', 'My skills', 'LookingForAJobDescription', [], Textarea)}</span>
            </div>
        </div>
        <br/>
    </form>
}

export const Contact = ({contactTitle, contactValue}) => {
    let no = 'no detailed information';

    return <>
        <div className={profInfoCSS.info}>
            {contactTitle}:
            <span className={profInfoCSS.info_data}>{contactValue === null ? no : contactValue}</span>
        </div>
    </>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;

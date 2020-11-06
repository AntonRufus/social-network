import React from 'react';
import profInfoCSS from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileDataForm = ({isOwner, status, updateStatus, handleSubmit, error, profile}) => {
    return <form onSubmit={handleSubmit} className={profInfoCSS.form}>
        {!isOwner && <div>
            <button className={profInfoCSS.buttonEdit}>
                save
            </button>
            {error && <div className={profInfoCSS.form_error}>{error}</div>}
        </div>}
        <div className={profInfoCSS.name}>
            <div className={profInfoCSS.info_name}>
                Full name:
                <div className={profInfoCSS.info_data}>
                    <span>{createField('text', 'Full name', 'fullName', [], Input)}</span>
                </div>
            </div>
            <div className={profInfoCSS.status_block}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <Contact contactTitle={'About me'} contactValue={createField('text', 'About me', 'aboutMe', [], Input)}/>
        </div>
        <br/>
        <div>
            <Contact contactTitle={'FB'}
                     contactValue={createField('text', 'Facebook', 'contacts.facebook', [], Input)}/>
            <Contact contactTitle={'WebSite'}
                     contactValue={createField('text', 'WebSite', 'contacts.website', [], Input)}/>
            <Contact contactTitle={'VK'} contactValue={createField('text', 'VK', 'contacts.vk', [], Input)}/>
            <Contact contactTitle={'Twitter'}
                     contactValue={createField('text', 'Twitter', 'contacts.twitter', [], Input)}/>
            <Contact contactTitle={'Instagram'}
                     contactValue={createField('text', 'Instagram', 'contacts.instagram', [], Input)}/>
            <Contact contactTitle={'YouTube'}
                     contactValue={createField('text', 'YouTube', 'contacts.youtube', [], Input)}/>
            <Contact contactTitle={'GitHub'}
                     contactValue={createField('text', 'GitHub', 'contacts.github', [], Input)}/>
            <Contact contactTitle={'Main Link'}
                     contactValue={createField('text', 'Main Link', 'contacts.mainLink', [], Input)}/>
        </div>
        <br/>
        <div className={profInfoCSS.info}>
            Looking for a job:
            <div className={profInfoCSS.info_data}>
                    <span>
                        {createField('checkbox', '', 'lookingForAJob', [], Input)}
                    </span>
            </div>
        </div>
        <div className={profInfoCSS.info}>
            My skills:
            <div className={profInfoCSS.info_data}>
                <span>{createField('text', 'My skills', 'lookingForAJobDescription', [], Textarea)}</span>
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

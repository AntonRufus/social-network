import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';

const ProfileContacts = ({profile, isOwner, goToEditMode}) => {
    let facebook = profile.contacts.facebook;
    let website = profile.contacts.website;
    let vk = profile.contacts.vk;
    let twitter = profile.contacts.twitter;
    let instagram = profile.contacts.instagram;
    let youtube = profile.contacts.youtube;
    let github = profile.contacts.github;
    let mainLink = profile.contacts.mainLink

    return <>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <br/>
        <Contact contactTitle={'FB'} contactValue={facebook}/>
        <Contact contactTitle={'WebSite'} contactValue={website}/>
        <Contact contactTitle={'VK'} contactValue={vk}/>
        <Contact contactTitle={'Twitter'} contactValue={twitter}/>
        <Contact contactTitle={'Instagram'} contactValue={instagram}/>
        <Contact contactTitle={'YouTube'} contactValue={youtube}/>
        <Contact contactTitle={'GitHub'} contactValue={github}/>
        <Contact contactTitle={'Main Link'} contactValue={mainLink}/>
        <br/>
    </>
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

export default ProfileContacts;

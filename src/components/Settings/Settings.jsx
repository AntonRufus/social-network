import React from 'react';
import settCSS from './Settings.module.css'
import InDeveloping from "../common/InDeveloping/InDeveloping";

const Settings = () => {
    return (
        <div className={settCSS.settings}>
            <div className={settCSS.sign}>Settings in developing.</div>
            <InDeveloping/>
        </div>
    )
}

export default Settings;

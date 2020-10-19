import React from 'react';
import settCSS from './Settings.module.css'
import InDeveloping from "../common/InDeveloping/InDeveloping";

const Settings = () => {
    return (
        <div className={settCSS.settings}>
            <InDeveloping/>
        </div>
    )
}

export default Settings;

import React from 'react';
import musicCSS from './Music.module.css'
import InDeveloping from "../common/InDeveloping/InDeveloping";

const Music = () => {
    return (
        <div className={musicCSS.music}>
            <div className={musicCSS.sign}>Music in developing.</div>
            <InDeveloping/>
        </div>
    )
}

export default Music;

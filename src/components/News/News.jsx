import React from 'react';
import newsCSS from './News.module.css'
import InDeveloping from "../common/InDeveloping/InDeveloping";

const News = () => {
    return (
        <div className={newsCSS.news}>
            <div className={newsCSS.sign}>News in developing.</div>
            <InDeveloping/>
        </div>
    )
}

export default News;

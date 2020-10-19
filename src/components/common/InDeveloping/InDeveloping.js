import React from "react";
import inDeveloping from "../../../assets/images/inDeveloping.png";
import inDevelopingCSS from './InDeveloping.module.css';

let InDeveloping = () => {
    return <div className={inDevelopingCSS.inDeveloping}>
        <div>This part of the application is under development, stay tuned.</div>
        <img src={inDeveloping} alt=""/>
    </div>
}

export default InDeveloping;

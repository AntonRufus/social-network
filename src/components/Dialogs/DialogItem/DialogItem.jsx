import React from 'react';
import dialCSS from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;

    return (
        <div className={dialCSS.dialog_item}>
            <div className={dialCSS.avatar_photo}>
                <img src={props.url} alt=""/>
            </div>
            <div className={dialCSS.dialog_name + ' ' + dialCSS.active}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;

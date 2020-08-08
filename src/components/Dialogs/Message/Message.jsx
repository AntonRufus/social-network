import React from 'react';
import dialCSS from './Message.module.css'

const Message = (props) => {
    return (
        <div className={dialCSS.message}>{props.message}</div>
    )
}

export default Message;

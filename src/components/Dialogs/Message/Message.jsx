import React from 'react';
import messCSS from './Message.module.css'

const Message = (props) => {
    return (
        <div className={messCSS.message}>{props.message}</div>
    )
}

export default Message;

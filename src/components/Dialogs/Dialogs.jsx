import React from 'react';
import dialCSS from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem url={dialog.photoUrl}
                                   name={dialog.name}
                                   id={dialog.id}/>);

    let messagesInElements = props.dialogsPage.messagesIn
        .map(message => <Message message={message.message}
                                 id={message.id}/>);

    let messagesOutElements = props.dialogsPage.messagesOut
        .map(message => <Message message={message.message}
                                 id={message.id}
                                 sendMessageOut={props.sendMessageOut}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
        console.log(props.dialogsPage.messagesOut)
    }

    let onMessageChange = () => {
        let messageUpdatedValue = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(messageUpdatedValue));
    }

    return (
        <div className={dialCSS.dialogs_block}>
            <div className={dialCSS.h}>Messages</div>
            <div className={dialCSS.dialogs}>
                <div className={dialCSS.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={dialCSS.messages_in_items}>
                    <p><b>Income messages</b></p>
                    {messagesInElements}
                </div>
                <div className={dialCSS.messages_out_items}>
                    <p><b>Outgo messages</b></p>
                    {messagesOutElements}
                    <textarea ref={newMessageElement}
                              value={props.newMessageText}
                              onChange={onMessageChange}
                              placeholder={'Enter your message'}
                              name="" id="" cols="30" rows="1"/>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

import React from 'react';
import dialCSS from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog =>
            <DialogItem url={dialog.photoUrl}
                        name={dialog.name}
                        id={dialog.id}
                        key={dialog.id}
            />
        );

    let messagesInElements = state.messagesIn
        .map(message =>
            <Message message={message.message}
                     id={message.id}
                     key={message.id}
            />
        );

    let messagesOutElements = state.messagesOut
        .map(message =>
            <Message message={message.message}
                     id={message.id}
                     sendMessageOut={props.sendMessageOut}
                     key={message.id}
            />
        );

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onClearMessage = () => {
        props.clearMessage();
    }

    let onNewMessageChange = () => {
        let body = newMessageElement.current.value;
        props.updateNewMessageBody(body);
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
                              value={state.newMessageText}
                              onChange={onNewMessageChange}
                              placeholder={'Enter your message'}
                              name="" id="" cols="30" rows="3"/>
                    <br/>
                    <button onClick={onSendMessage}>send</button>
                    <button onClick={onClearMessage}>clear</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

import React from 'react';
import dialCSS from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
        // props.sendMessageOut();
        props.dispatch({type: 'SEND-MESSAGE-OUT'});
        console.log(props.dialogsPage.messagesOut)
    }

    function onMessageChange() {
        let messageUpdatedValue = newMessageElement.current.value;
        // props.updateNewMessageOut(messageUpdatedValue);
        props.dispatch({
            type: 'UPDATE-NEW-MESSAGE-OUT',
            newMessageText: messageUpdatedValue
        });
    }

    return (
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
                          name="" id="" cols="30" rows="1"/>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;

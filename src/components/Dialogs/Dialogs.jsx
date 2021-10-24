import React from 'react';
import dialCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageFormRedux from './DialogsForm';

const Dialogs = ({ dialogsPage, sendMessageOut, ...props }) => {
    let dialogsElements = dialogsPage.dialogs.map((dialog) => (
        <DialogItem url={dialog.photoUrl} name={dialog.name} id={dialog.id} key={dialog.id} />
    ));

    let messagesInElements = dialogsPage.messagesIn.map((message) => (
        <Message message={message.message} id={message.id} key={message.id} />
    ));

    let messagesOutElements = dialogsPage.messagesOut.map((message) => (
        <Message message={message.message} id={message.id} sendMessageOut={sendMessageOut} key={message.id} />
    ));

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
        if (values.newMessageBody === '') values.newMessageBody = 'Empty message';
    };

    return (
        <div className={dialCSS.dialogs_block}>
            <div className={dialCSS.h}>Messages</div>
            <div className={dialCSS.dialogs}>
                <div className={dialCSS.dialogs_items}>{dialogsElements}</div>
                <div className={dialCSS.messages_in_items}>
                    <p>
                        <b>Income messages</b>
                    </p>
                    {messagesInElements}
                </div>
                <div className={dialCSS.messages_out_items}>
                    <p>
                        <b>Outgo messages</b>
                    </p>
                    {messagesOutElements}
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

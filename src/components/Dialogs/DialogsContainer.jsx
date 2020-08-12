import React from 'react';
import {
    clearMessageActionCreator,
    onMessageChangeActionCreator,
    sendMessageActionCreator
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onClearMessage = () => {
        props.store.dispatch(clearMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(onMessageChangeActionCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessage}
                 clearMessage={onClearMessage}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;

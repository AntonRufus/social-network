import React from 'react';
import StoreContext from "../../StoreContext";
import {
    clearMessageActionCreator,
    onMessageChangeActionCreator,
    sendMessageActionCreator
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let onSendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    }

                    let onClearMessage = () => {
                        store.dispatch(clearMessageActionCreator());
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(onMessageChangeActionCreator(body));
                    }

                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessage}
                                    clearMessage={onClearMessage}
                                    dialogsPage={state.dialogsPage}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;

import React from 'react';
import {
    clearMessageActionCreator,
    onMessageChangeActionCreator,
    sendMessageActionCreator
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*import StoreContext from "../../StoreContext";
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
}*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(onMessageChangeActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        clearMessage: () => {
            dispatch(clearMessageActionCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

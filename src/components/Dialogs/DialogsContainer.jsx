import React from 'react';
import {
    clearMessage,
    onMessageChange,
    sendMessage
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(onMessageChange(body))
        },
        sendMessage: () => {
            dispatch(sendMessage())
        },
        clearMessage: () => {
            dispatch(clearMessage())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

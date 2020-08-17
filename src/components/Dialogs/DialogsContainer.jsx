import React from 'react';
import {
    clearMessageActionCreator,
    onMessageChangeActionCreator,
    sendMessageActionCreator
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

const SEND_MESSAGE_OUT = 'SEND-MESSAGE-OUT';
const UPDATE_NEW_MESSAGE_OUT = 'UPDATE-NEW-MESSAGE-OUT';
const CLEAR_MESSAGE = 'CLEAR-POST';

const dialogReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE_OUT:
            let newMessageOut = {
                id: state.messagesOut.length + 1,
                message: state.newMessageText,
            };
            state.newMessageText = '';
            state.messagesOut.push(newMessageOut);
            break;
        case UPDATE_NEW_MESSAGE_OUT:
            state.newMessageText = action.newMessageText;
            break;
        case CLEAR_MESSAGE:
            state.newMessageText = '';
            break;
    }

    return state;
};

export const onMessageChangeActionCreator = (messageUpdatedValue) => ({
    type: UPDATE_NEW_MESSAGE_OUT,
    newMessageText: messageUpdatedValue,
});

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE_OUT,
});

export const clearMessageActionCreator = () => ({
    type: CLEAR_MESSAGE,
});

export default dialogReducer;

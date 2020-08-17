const SEND_MESSAGE_OUT = 'SEND-MESSAGE-OUT';
const UPDATE_NEW_MESSAGE_OUT = 'UPDATE-NEW-MESSAGE-OUT';
const CLEAR_MESSAGE = 'CLEAR-POST';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Peppa Pig',
            photoUrl: 'https://sun9-28.userapi.com/c847021/v847021528/44667/lMWp94wS5jQ.jpg'
        },
        {
            id: 2,
            name: 'George',
            photoUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/81/81dfb27a31316221ac10f3b1f9b6a3a55899d0af_medium.jpg'
        },
        {
            id: 3,
            name: 'Daddy Pig',
            photoUrl: 'https://img.kp40.ru/avatars/30569.jpg?i=1'
        },
        {
            id: 4,
            name: 'Mummy Pig',
            photoUrl: 'https://slovnet.ru/wp-content/uploads/2018/12/18-10-150x150.png'
        },
        {
            id: 5,
            name: 'April O`Neil',
            photoUrl: 'http://localhost:3000/pic/avatars/April/April.png'
        },
        {
            id: 6,
            name: 'Bibop',
            photoUrl: 'http://localhost:3000/pic/avatars/Bibop/Bibop.jpg'
        },
        {
            id: 7,
            name: 'Casey',
            photoUrl: 'http://localhost:3000/pic/avatars/Casey/Casey.jpg'
        },
        {
            id: 8,
            name: 'Don',
            photoUrl: 'http://localhost:3000/pic/avatars/Don/Don.jpg'
        },
        {
            id: 9,
            name: 'Karai',
            photoUrl: 'http://localhost:3000/pic/avatars/Karai/Karai.jpg'
        },
        {
            id: 10,
            name: 'Krang',
            photoUrl: 'http://localhost:3000/pic/avatars/Krang/Krang.jpg'
        },
        {
            id: 11,
            name: 'Leo',
            photoUrl: 'http://localhost:3000/pic/avatars/Leo/Leo.jpg'
        },
        {
            id: 12,
            name: 'Mikey',
            photoUrl: 'http://localhost:3000/pic/avatars/Mikey/Mikey.jpg'
        },
        {
            id: 13,
            name: 'Raph',
            photoUrl: 'http://localhost:3000/pic/avatars/Raph/Raph.jpg'
        },
        {
            id: 14,
            name: 'Rockstady',
            photoUrl: 'http://localhost:3000/pic/avatars/Rockstady/Rockstady.jpg'
        },
        {
            id: 15,
            name: 'Shredder',
            photoUrl: 'http://localhost:3000/pic/avatars/Shredder/Shredder.png'
        },
        {
            id: 16,
            name: 'Splinter',
            photoUrl: 'http://localhost:3000/pic/avatars/Splinter/Splinter.jpg'
        },
        {
            id: 17,
            name: 'Foot Ninja',
            photoUrl: 'http://localhost:3000/pic/avatars/FootClan/Foot-Ninja.jpg'
        },
        {
            id: 18,
            name: 'Elite Foot Ninja',
            photoUrl: 'http://localhost:3000/pic/avatars/FootClan/Elite-Foot-Ninja.jpg'
        },
    ],
    messagesIn: [
        {id: 1, message: 'Message_in_1'},
        {id: 2, message: 'Message_in_2'},
        {id: 3, message: 'Message_in_3'},
        {id: 4, message: 'Message_in_4'},
        {id: 5, message: 'Message_in_5'},
        {id: 6, message: 'Message_in_6'},
        {id: 7, message: 'Message_in_7'},
        {id: 8, message: 'Message_in_8'},
        {id: 9, message: 'Message_in_9'},
        {id: 10, message: 'Message_in_10'},
    ],
    messagesOut: [
        {id: 1, message: 'Message_out_1'},
        {id: 2, message: 'Message_out_2'},
        {id: 3, message: 'Message_out_3'},
        {id: 4, message: 'Message_out_4'},
        {id: 5, message: 'Message_out_5'},
        {id: 6, message: 'Message_out_6'},
        {id: 7, message: 'Message_out_7'},
        {id: 8, message: 'Message_out_8'},
        {id: 9, message: 'Message_out_9'},
        {id: 10, message: 'Message_out_10'},
    ],
    newMessageText: 'Default Message Text',
};

const dialogReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        messagesOut: [...state.messagesOut],
    };
    switch (action.type) {
        case SEND_MESSAGE_OUT: {
            let newMessageOut = {
                id: state.messagesOut.length + 1,
                message: state.newMessageText,
            };
            stateCopy.messagesOut.push(newMessageOut);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_OUT: {
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        case CLEAR_MESSAGE: {
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        default:
            return state;
    }
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

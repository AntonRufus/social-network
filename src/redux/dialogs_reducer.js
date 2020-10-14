const SEND_MESSAGE_OUT = 'SEND-MESSAGE-OUT';

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
            photoUrl: '/social-network/pic/avatars/April/April.png'
        },
        {
            id: 6,
            name: 'Bibop',
            photoUrl: '/social-network/pic/avatars/Bibop/Bibop.jpg'
        },
        {
            id: 7,
            name: 'Casey',
            photoUrl: '/social-network/pic/avatars/Casey/Casey.jpg'
        },
        {
            id: 8,
            name: 'Don',
            photoUrl: '/social-network/pic/avatars/Don/Don.jpg'
        },
        {
            id: 9,
            name: 'Karai',
            photoUrl: '/social-network/pic/avatars/Karai/Karai.jpg'
        },
        {
            id: 10,
            name: 'Krang',
            photoUrl: '/social-network/pic/avatars/Krang/Krang.jpg'
        },
        {
            id: 11,
            name: 'Leo',
            photoUrl: '/social-network/pic/avatars/Leo/Leo.jpg'
        },
        {
            id: 12,
            name: 'Mikey',
            photoUrl: '/social-network/pic/avatars/Mikey/Mikey.jpg'
        },
        {
            id: 13,
            name: 'Raph',
            photoUrl: '/social-network/pic/avatars/Raph/Raph.jpg'
        },
        {
            id: 14,
            name: 'Rockstady',
            photoUrl: '/social-network/pic/avatars/Rockstady/Rockstady.jpg'
        },
        {
            id: 15,
            name: 'Shredder',
            photoUrl: '/social-network/pic/avatars/Shredder/Shredder.png'
        },
        {
            id: 16,
            name: 'Splinter',
            photoUrl: '/social-network/pic/avatars/Splinter/Splinter.jpg'
        },
        {
            id: 17,
            name: 'Foot Ninja',
            photoUrl: '/social-network/pic/avatars/FootClan/Foot-Ninja.jpg'
        },
        {
            id: 18,
            name: 'Elite Foot Ninja',
            photoUrl: '/social-network/pic/avatars/FootClan/Elite-Foot-Ninja.jpg'
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_OUT: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesOut: [...state.messagesOut, {
                    id: state.messagesOut.length + 1,
                    message: body,
                }],
            }
        }
        default:
            return state;
    }
};

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE_OUT, newMessageBody});

export default dialogReducer;

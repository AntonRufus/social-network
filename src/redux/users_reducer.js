const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /*
        {
            id: 1,
            fullName: 'Kabal',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            avatarPic: 'http://fightersgeneration.com/characters2/kabal-mk9port_small.jpg',
            followed: false,
        },
        {
            id: 2,
            fullName: 'Kabal',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            avatarPic: 'http://fightersgeneration.com/characters2/kabal-mk9port_small.jpg',
            followed: true,
        },
        {
            id: 3,
            fullName: 'Kabal',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            avatarPic: 'http://fightersgeneration.com/characters2/kabal-mk9port_small.jpg',
            followed: true,
        },
        {
            id: 4,
            fullName: 'Kabal',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            avatarPic: 'http://fightersgeneration.com/characters2/kabal-mk9port_small.jpg',
            followed: false,
        },
        */
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return false;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;

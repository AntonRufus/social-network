const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /*{
            id: 1,
            fullName: 'Kabal',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            photoUrl: 'https://legacy.mortalkombatonline.com/content/games/mk3/kabal/bio.gif',
            followed: false,
        },
        {
            id: 2,
            fullName: 'Scorpion',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            photoUrl: 'https://legacy.mortalkombatonline.com/content/games/umk3/scorpion/bio.gif',
            followed: true,
        },
        {
            id: 3,
            fullName: 'Shang Tsung',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            photoUrl: 'https://legacy.mortalkombatonline.com/content/games/mk3/shangtsung/bio.gif',
            followed: true,
        },
        {
            id: 4,
            fullName: 'Sub Zero',
            status: 'MKII',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            photoUrl: 'https://legacy.mortalkombatonline.com/content/games/mk3/subzero/bio.gif',
            followed: false,
        },*/
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
                        return {...user, followed: false}
                    }
                    return user;
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

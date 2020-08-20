import React from "react";
import usersCSS from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
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
                    fullName: 'Shang_Tsung',
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
                    fullName: 'Sub_Zero_MK3',
                    status: 'MKII',
                    location: {
                        city: 'Madrid',
                        country: 'Spain'
                    },
                    photoUrl: 'https://legacy.mortalkombatonline.com/content/games/mk3/subzero/bio.gif',
                    followed: false,
                },
            ]
        )
    }

    return (
        <div className={usersCSS.users}>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt='avatar' className={usersCSS.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                            <span>
                                <div>
                                    <NavLink to={'/user/' + user.fullName} className={usersCSS.fullName}>
                                        {user.fullName}
                                    </NavLink>
                                </div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.city}</div>
                                <div>{user.location.country}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;

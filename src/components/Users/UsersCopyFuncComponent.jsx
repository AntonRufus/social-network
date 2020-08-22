import React from "react";
import usersCSS from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import userPhotoSmall from '../../assets/images/avatar-default-nonuser-small.png'

const UsersCopyFuncComponent = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });

            /*props.setUsers(
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
            )*/
        }
    }

    return (
        <div className={usersCSS.users}>

            <button  className={usersCSS.getUsers} onClick={getUsers}>Get Users</button>

            {/*<NavLink to='/users_list' className={usersCSS}>
                UsersList
            </NavLink>*/}

            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        {/*<div>
                            <img src={user.photoUrl} alt='avatar' className={usersCSS.userPhoto}/>
                        </div>*/}
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhotoSmall} alt='avatar'
                                 className={usersCSS.userPhoto}/>
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
                                {/*<div>
                                    <NavLink to={'/user/' + user.fullName} className={usersCSS.fullName}>
                                        {user.fullName}
                                    </NavLink>
                                </div>
                                <div>{user.status}</div>*/}
                                <div>
                                    <NavLink to={'/user/' + user.name} className={usersCSS.fullName}>
                                        {user.name}
                                    </NavLink>
                                </div>
                                <div>{user.status}</div>
                            </span>
                            {/*<span>
                                <div>{user.location.city}</div>
                                <div>{user.location.country}</div>
                            </span>*/}
                            <span className={usersCSS.location}>
                                <div className={usersCSS.locationCity}>{'user.location.city'}</div>
                                <div className={usersCSS.locationCountry}>{'user.location.country'}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default UsersCopyFuncComponent;

import React from 'react';
import usersCSS from './UserFollowed.module.css'
import InDeveloping from "../common/InDeveloping/InDeveloping";

const UserFollowed = () => {
    return (
        <div className={usersCSS.followed}>
            <div className={usersCSS.sign}>Followed users in developing.</div>
            <InDeveloping/>
        </div>
    )
}

export default UserFollowed;


/*
import React from "react";
import usersCSS from './Users.module.css';
import {NavLink} from "react-router-dom";
import userPhotoSmall from '../../assets/images/avatar-default-nonuser-small.png';

/!*make a list with users who followed me.*!/

let UserFollowed = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={usersCSS.users}>
        <div className={usersCSS.pages_buttons}>
            {pages.map(page => {
                return <div key={page}
                            className={props.currentPage === page && usersCSS.activeLink}
                            onClick={() => {
                                props.onPageChanged(page);
                            }}>
                    {page}
                </div>
            })}
        </div>
        {props.users.map(user =>
            <div key={user.id} className={usersCSS.users_block}>
                <div>
                    <div className={usersCSS.img_avatar}>
                        <NavLink to={'/profile/' + user.id} className={usersCSS.fullName}>
                            <img src={user.photos.small != null ? user.photos.small : userPhotoSmall}
                                 alt='avatar'
                                 className={usersCSS.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={usersCSS.follow_button}>
                        {user.followed
                            ? <button
                                disabled={props.followingInProgress
                                    .some(id => id === user.id)}
                                onClick={() => {
                                    props.unfollow(user.id)
                                }}>
                                Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.follow(user.id);
                                }}>
                                Follow</button>
                        }
                    </div>
                </div>
                <div className={usersCSS.descriptions_block}>
                    <div>
                        <span>Name:</span>
                        <NavLink to={'/profile/' + user.id} className={usersCSS.fullName}>
                            {user.name}
                        </NavLink>
                    </div>
                    <div>
                        <span>Status:</span>
                        {user.status}
                        {user.status != null ? user.status : 'no status'}
                    </div>
                    <div>
                        <span>ID:</span>
                        {user.id}
                    </div>
                </div>
            </div>
        )}
    </div>
}

export default UserFollowed;
*/

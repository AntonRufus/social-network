import React from "react";
import usersCSS from './Users.module.css';
import {NavLink} from "react-router-dom";
import userPhotoSmall from '../../assets/images/avatar-default-nonuser-small.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={usersCSS.users}>
            <div className={usersCSS.pages_buttons}>
                {pages.map(page => {
                    return <div
                        className={props.currentPage === page && usersCSS.activeLink}
                        onClick={(event) => {
                            props.onPageChanged(page);
                        }}> {page} </div>
                })}
            </div>
            {
                props.users.map(user =>
                    <div key={user.id} className={usersCSS.users_block}>
                        <div>
                            <div className={usersCSS.img_avatar}>
                                <img src={user.photos.small != null ? user.photos.small : userPhotoSmall}
                                     alt='avatar'
                                     className={usersCSS.userPhoto}/>
                            </div>
                            <div className={usersCSS.follow_button}>
                                {user.followed
                                    ? <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}> Unfollow </button>
                                    : <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={usersCSS.descriptions_block}>
                            <div>
                                <span>Name:</span>
                                <NavLink to={'/user/' + user.name} className={usersCSS.fullName}>
                                    {user.name}
                                </NavLink></div>
                            <div>
                                <span>Status:</span>
                                {user.status}
                                {user.status != null ? user.status : 'no status'}
                            </div>
                            <div>
                                <span>ID:</span>
                                {user.id}
                            </div>
                            {/*
                            <div className={usersCSS.location}>
                                <div className={usersCSS.locationCity}>{'user.location.city'}</div>
                                <div className={usersCSS.locationCountry}>{'user.location.country'}</div>
                            </div>
                            */}
                            <br/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;
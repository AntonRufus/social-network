import React from "react";
import usersCSS from './Users.module.css';
import {NavLink} from "react-router-dom";
import userPhotoSmall from '../../assets/images/avatar-default-nonuser-small.png';
import {usersAPI} from "../../api/api";

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
                    return <div key={page}
                                className={props.currentPage === page && usersCSS.activeLink}
                                onClick={(event) => {
                                    props.onPageChanged(page);
                                }}>
                        {page}
                    </div>
                })}
            </div>
            {
                props.users.map(user =>
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

                                    /*props.toggleFollowingProgress(true, user.id);
                                    usersAPI.unfollow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });*/

                                    : <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.follow(user.id);
                                        }}>
                                        Follow</button>

                                    /*props.toggleFollowingProgress(true, user.id);
                                    usersAPI.follow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });*/

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
                            {/*     <div className={usersCSS.location}>
                                    <div className={usersCSS.locationCity}>{'user.location.city'}</div>
                                    <div className={usersCSS.locationCountry}>{'user.location.country'}</div>
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

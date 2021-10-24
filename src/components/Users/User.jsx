import React from 'react';
import userCSS from './User.module.css';
import { NavLink } from 'react-router-dom';
import userPhotoSmall from '../../assets/images/avatar-default-nonuser-small.png';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={userCSS.user}>
            <div key={user.id} className={userCSS.user_block}>
                <div className={''}>
                    <div className={userCSS.img_avatar}>
                        <NavLink to={'/profile/' + user.id} className={userCSS.fullName}>
                            <img
                                src={user.photos.small != null ? user.photos.small : userPhotoSmall}
                                alt="avatar"
                                className={userCSS.userPhoto}
                            />
                        </NavLink>
                    </div>
                    <div className={userCSS.follow_button}>
                        {user.followed ? (
                            <button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id);
                                }}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => {
                                    follow(user.id);
                                }}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                </div>
                <div className={userCSS.descriptions_block}>
                    <div>
                        <span>Name:</span>
                        <NavLink to={'/profile/' + user.id} className={userCSS.fullName}>
                            {user.name}
                        </NavLink>
                    </div>
                    <div className={userCSS.status}>
                        <span>Status:</span>
                        {user.status != null ? user.status.slice(0, 15) : 'no status'}
                    </div>
                    <div>
                        <span>ID:</span>
                        {user.id}
                    </div>
                    {/*<div>
                        {user.followed
                            ? <UserFollowed {...user}/>
                            : null
                        }
                    </div>*/}
                    {/*<div className={userCSS.location}>
                   <div className={userCSS.locationCity}>{'user.location.city'}</div>
                   <div className={userCSS.locationCountry}>{'user.location.country'}</div>*/}
                </div>
            </div>
        </div>
    );
};

export default User;

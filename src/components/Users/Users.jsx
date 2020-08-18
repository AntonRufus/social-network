import React from "react";
import usersCSS from './Users.module.css'

const Users = (props) => {
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
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;

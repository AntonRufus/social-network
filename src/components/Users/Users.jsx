import React, {Component} from "react";
import usersCSS from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import userPhotoSmall from '../../assets/images/avatar-default-nonuser-small.png'

class Users extends React.Component {

    /*
    it's happen by default:

        constructor(props) {
            super(props);
        }

    */

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            );
    }

    render() {
        return (
            <div className={usersCSS.users}>
                {
                    this.props.users.map(user =>
                        <div key={user.id}  className={usersCSS.users_block}>
                            <div>
                                <div>
                                    <img src={user.photos.small != null ? user.photos.small : userPhotoSmall}
                                         alt='avatar'
                                         className={usersCSS.userPhoto}/>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(user.id)
                                        }}> Unfollow </button>
                                        : <button onClick={() => {
                                            this.props.follow(user.id)
                                        }}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        Name:_
                                        <NavLink to={'/user/' + user.name} className={usersCSS.fullName}>
                                            {user.name}
                                        </NavLink></div>
                                    <div>
                                        Status:___
                                        {user.status}___?
                                    </div>
                                    <div>
                                        ID:_
                                        {user.id}</div>
                                </div>
                                {/*<div className={usersCSS.location}>
                                    <div className={usersCSS.locationCity}>{'user.location.city'}</div>
                                    <div className={usersCSS.locationCountry}>{'user.location.country'}</div>
                                </div>*/}
                                <br/>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;

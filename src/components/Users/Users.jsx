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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            );
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={usersCSS.users}>
                <div className={usersCSS.pages_buttons}>
                    {pages.map(page => {
                        return <div
                            className={this.props.currentPage === page && usersCSS.activeLink}
                            onClick={(event) => {
                                this.onPageChanged(page);
                            }}> {page} </div>
                    })}
                </div>
                {
                    this.props.users.map(user =>
                        <div key={user.id} className={usersCSS.users_block}>
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

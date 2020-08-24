import React, {Component} from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/users_reducer";
import * as axios from 'axios';
import Users from "./Users";

class UsersContainer extends React.Component {

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
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />
        /*return (
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
                                {/!*<div className={usersCSS.location}>
                                    <div className={usersCSS.locationCity}>{'user.location.city'}</div>
                                    <div className={usersCSS.locationCountry}>{'user.location.country'}</div>
                                </div>*!/}
                                <br/>
                            </div>
                        </div>
                    )
                }
            </div>
        )*/
    }
}

const mapStoreToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unFollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(UsersContainer);

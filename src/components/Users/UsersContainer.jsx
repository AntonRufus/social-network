import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users_reducer";
import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    /*
    it's happen by default:

        constructor(props) {
            super(props);
        }

    */

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    debugger;
                    this.props.setUsers(data.items);
                    this.props.toggleIsFetching(false);
                    this.props.setTotalUsersCount(data.totalCount);
                }
            );
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                }
            );
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            {/*<PreloaderAuth/> is not working here together with <Preloader/>*/}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

const mapStoreToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStoreToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer);

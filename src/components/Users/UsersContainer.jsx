import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users_reducer";

const UsersContainer = (props) => {

    return (
        <div>
        </div>
    )
}

const mapStoreToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Users);

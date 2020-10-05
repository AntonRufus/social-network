import React from "react";
import usersCSS from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollow, follow}) => {
    return <div className={usersCSS.block}>
        <div className={usersCSS.pages}>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
        </div>

        {users.map(user =>
            <User key={user.id}
                  user={user}
                  followingInProgress={followingInProgress}
                  unfollow={unfollow}
                  follow={follow}
            />
        )}

        <div className={usersCSS.pages}>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
        </div>
    </div>
}

export default Users;

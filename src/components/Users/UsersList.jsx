import React from "react";
import {NavLink} from "react-router-dom";
import usersCSS from "./UsersList.module.css";

export const UserPage = ()=>{
    return <img src="https://images.launchbox-app.com/04a69120-24d6-40e1-81b2-d2b44713ca4a.jpg" alt=""/>
}

const UsersList = () => {
    return (
        <div className={usersCSS.users}>
            <NavLink to='/user/Kabal'> Kabal</NavLink>
            {/*<NavLink to='/user/Kabal'> Kabal</NavLink>
            <NavLink to='/user/Sub_Zero_MK3'> Sub Zero MK3</NavLink>
            <NavLink to='/user/Shang_Tsung'> Shang Tsung</NavLink>
            <NavLink to='/user/Scorpion'> Scorpion</NavLink>*/}
        </div>
    )
}

export default UsersList;

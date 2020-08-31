import React from 'react';
import loginCSS from './Login.module.css'
// import {Redirect} from "react-router-dom";

const Login = () => {

    // if (props.isAuth) return <Redirect to='/profile'/>;

    return (
        <div className={loginCSS.login}>
            <a href="https://social-network.samuraijs.com/">Login</a>
        </div>
    )
}

export default Login;

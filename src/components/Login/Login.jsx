import React from 'react';
import loginCSS from './Login.module.css'
// import {Redirect} from "react-router-dom";

const Login = () => {

    // if (props.isAuth) return <Redirect to='/profile'/>;

    return (
        <div className={loginCSS.music}>
            Login
        </div>
    )
}

export default Login;

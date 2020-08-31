import React from 'react';
import loginCSS from './Login.module.css'
import {Redirect} from "react-router-dom";

const Login = (props) => {
    return (
        <div className={loginCSS.login}>
            {props.isAuth
                ? <Redirect to='/profile'/>
                : <a href="https://social-network.samuraijs.com/">Login</a>
            }
        </div>
    )
}

export default Login;

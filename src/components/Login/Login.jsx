import React from 'react';
import loginCSS from './Login.module.css'
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <>
        <div className={loginCSS.login}>
            {props.isAuth
                ? <Redirect to='/profile'/>
                // : <a href="https://social-network.samuraijs.com/">Login</a>
                : <div className={loginCSS.login_form}>
                    <h1>Login</h1>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div>
            }
        </div>
    </>
}

export default Login;

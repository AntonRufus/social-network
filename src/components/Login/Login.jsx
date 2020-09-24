import React from 'react';
import loginCSS from './Login.module.css'
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return <>
        <div className={loginCSS.login}>
            {!props.isAuth
                ? <div className={loginCSS.login_form}>
                    <h1>Login</h1>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div>
                : <div><Redirect to='/profile'/></div> //Redirect doesn't work
            }
        </div>
    </>
}

export default connect(null, {login})(Login);

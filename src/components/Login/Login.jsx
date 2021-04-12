import React from 'react';
import loginCSS from './Login.module.css'
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = async (formData) => {
        // console.log(formData);
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    return <>
        <div className={loginCSS.login}>
            {!isAuth
                ? <div className={loginCSS.login_form}>
                    <h1>Login</h1>
                    <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
                </div>
                : <div><Redirect to='/profile'/></div>
            }
            {/* check HeaderContainer.jsx and uncomment Redirect */}
        </div>
    </>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

// it was without mapStateToProps
// export default connect(null, {login})(Login);

export default connect(mapStateToProps, {login})(Login);

import React from 'react';
import {Field, reduxForm} from "redux-form";
import loginCSS from "./Login.module.css";

const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='text' name='login' placeholder=' Enter login' component='input'/>
            </div>
            <div>
                <Field type='text' name='password' placeholder=' and password' component='input'/>
            </div>
            <div className={loginCSS.checkbox}>
                <Field type='checkbox' component='input' name='remember_me'/>
                <span>remember me =)</span>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginFrom)

export default LoginReduxForm;

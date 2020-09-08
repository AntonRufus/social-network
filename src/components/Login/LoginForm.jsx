import React from 'react';
import {Field, reduxForm} from "redux-form";
import loginCSS from "./Login.module.css";
import {InputCheckbox, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(25);

const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='text' name='email' placeholder=' Enter email'
                       component={Input}
                       validate={[requiredField, maxLength]}/>
            </div>
            <div>
                <Field type='password' name='password' placeholder=' and password'
                       component={Input}
                       validate={[requiredField, maxLength]}/>
            </div>
            <div className={loginCSS.checkbox}>
                <Field type='checkbox' name='rememberMe'
                       component={InputCheckbox}
                       validate={[requiredField]}/>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginFrom)

export default LoginReduxForm;

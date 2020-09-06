import React from 'react';
import {Field, reduxForm} from "redux-form";
import loginCSS from "./Login.module.css";
import {InputCheckbox, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(15);

const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='text' name='login' placeholder=' Enter login'
                       component={Input}
                       validate={[requiredField, maxLength]}/>
            </div>
            <div>
                <Field type='text' name='password' placeholder=' and password'
                       component={Input}
                       validate={[requiredField, maxLength]}/>
            </div>
            <div className={loginCSS.checkbox}>
                <Field type='checkbox' name='remember_me'
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

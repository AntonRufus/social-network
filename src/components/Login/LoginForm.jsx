import React from 'react';
import {reduxForm} from "redux-form";
import loginCSS from "./Login.module.css";
import {InputCheckbox, Input, createField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(50);

const LoginFrom = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('text', ' Enter email', 'email', [requiredField, maxLength], Input)}
            {createField('password', 'and password', 'password', [requiredField, maxLength], Input)}
            <div className={loginCSS.checkbox}>
                {createField('checkbox', null, 'rememberMe', [maxLength], InputCheckbox)}
            </div>
            {error && <div className={loginCSS.form_summery_error}>{error}</div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginFrom)

export default LoginReduxForm;

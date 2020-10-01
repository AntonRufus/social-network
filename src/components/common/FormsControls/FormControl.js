import React from "react";
import formsCSS from "./FormsControls.module.css";

const FormControl = ({input, meta: {touched, error}, ...props}) => {
    const hasAnError = touched && error;
    return <>
        <div className={formsCSS.form_control}>
            <div className={(hasAnError ? formsCSS.error : '')}>
                {props.children}
            </div>
            {hasAnError && <span> {error}</span>}
        </div>
    </>
}
export default FormControl;

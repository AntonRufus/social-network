import React from "react";
import formsCSS from "./FormsControls.module.css";

const FormControl = ({input, meta, ...props}) => {
    const hasAnError = meta.touched && meta.error;
    return <>
        <div className={formsCSS.form_control}>
            <div className={(hasAnError ? formsCSS.error : '')}>
                {props.children}
            </div>
            {hasAnError && <span> {meta.error}</span>}
        </div>
    </>
}
export default FormControl;

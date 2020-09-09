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

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const InputCheckbox = ({input, meta, ...props}) => {
    const inputRememberValue = !input.value;
    return (
        <div className={formsCSS.inputCheckbox}>
            <input {...input} {...props}/>
            {inputRememberValue && <span className={formsCSS.not_remember}>do not remember</span>}
            {!inputRememberValue && <span className={formsCSS.remember}>remember me =)</span>}
        </div>
    )
}

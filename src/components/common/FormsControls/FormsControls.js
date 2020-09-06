import React from "react";
import textareaCSS from "./FormsControls.module.css";

const FormControl = ({input, meta, ...props}) => {
    const hasAnError = meta.touched && meta.error;
    return <>
        <div className={textareaCSS.form_control}>
            <div className={(hasAnError ? textareaCSS.error : '')}>
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
    const hasAnError = meta.error;
    return (
        <div className={textareaCSS.inputCheckbox}>
            <input {...input} {...props}/>
            {hasAnError && <span className={textareaCSS.not_remember}> remember me =)</span>}
            {!hasAnError && <span className={textareaCSS.remember}> remember me =)</span>}
        </div>
    )
}

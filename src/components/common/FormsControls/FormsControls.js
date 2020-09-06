import React from "react";
import textareaCSS from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={textareaCSS.form_control}>
            <textarea {...input} {...props}/>
        </div>
    )
}

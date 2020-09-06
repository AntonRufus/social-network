import React from 'react';
import {Field, reduxForm} from "redux-form";
import postsCSS from './MyPosts.module.css';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostText' placeholder='Enter your post text' cols='28'/>
            <br/>
            <button className={postsCSS.post_button}>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

export default AddPostFormRedux;

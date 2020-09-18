import React from 'react';
import postsCSS from './MyPosts.module.css';
import Post from "./Post/MyPost";
import AddPostFormRedux from "./PostForm";

class MyPosts extends React.Component {
    render() {
        let postsElements = this.props.posts
            .map(post =>
                <Post message={post.message}
                      likesCount={post.likesCount}
                      dislikesCount={post.dislikesCount}
                      url={post.url}
                      key={post.id}
                />
            );

        let addNewPost = (values) => {
            this.props.addPost(values.newPostText);
        }

        return (
            <div className={postsCSS.my_posts_main}>
                <div className={postsCSS.my_posts_label}>
                    <h3>MY POSTS</h3>
                </div>
                <div className={postsCSS.textarea}>
                    <AddPostFormRedux onSubmit={addNewPost}/>
                </div>
                <div className={postsCSS.posts_block}>
                    {postsElements}
                </div>
            </div>
        )
    }
}

export default MyPosts;

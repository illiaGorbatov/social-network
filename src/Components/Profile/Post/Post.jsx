import React from "react";
import style from "./Post.module.sass";

const Post = (props) => {
    return (
        <div className={style.post}>
            {props.postContent}
        </div>
    )
};

export default Post;
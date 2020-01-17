import React from "react";
import style from "./AddPost.module.sass";

const AddPost = (props) => {
    let newPost = React.createRef();
    let addPost = () => {
        let postMessage = newPost.current.value;
        props.addPost(postMessage);
        newPost.current.value = '';
    };

    return (
        <div className={style.addPost}>
            <input type={'text'} ref={newPost}></input>
            <button onClick={addPost}>Add</button>
        </div>
    )
};

export default AddPost;
import React from "react";
import style from "./AddPost.module.sass";

const AddPost = (props) => {
    let newPost = React.createRef();
    let updatePostValue = () => {
        let value = newPost.current.value;
        props.updatePostCurrentValue(value);
    };

    return (
        <div className={style.addPost}>
            <input onChange={updatePostValue} ref={newPost} value={props.postInputValue}/>
            <button onClick={props.addPost}>Add</button>
        </div>
    )
};

export default AddPost;
import React from "react";
import style from "./AddPost.module.sass";

const AddPost = (props) => {
    let addPostInputChangeHandler = (event) => {
        let inputValue = event.target.value;
        props.addPostInputChange(inputValue);
    };

    return (
        <div className={style.addPost}>
            <input onChange={addPostInputChangeHandler} value={props.postInputValue}/>
            <button onClick={props.addPost}>Add</button>
        </div>
    )
};

export default AddPost;
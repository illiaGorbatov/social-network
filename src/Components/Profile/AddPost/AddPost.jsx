import React from "react";
import style from "./AddPost.module.sass";
import {addPostCreator, updateAddPostInputValueCreator} from "../../../Redux/Profile-reducer";


const AddPost = (props) => {
    let addPostInputChangeHandler = (event) => {
        let inputValue = event.target.value;
        props.dispatch(updateAddPostInputValueCreator(inputValue))
    };
    let addPostClickHandler = () => {
        props.dispatch(addPostCreator())
    };

    return (
        <div className={style.addPost}>
            <input onChange={addPostInputChangeHandler} value={props.postInputValue}/>
            <button onClick={addPostClickHandler}>Add</button>
        </div>
    )
};

export default AddPost;
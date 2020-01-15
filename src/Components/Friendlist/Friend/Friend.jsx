import React from "react";
import style from "./Friend.module.sass";

const Friend = (props) => {

    return (
        <div className={style.contentWrapper}>
            {props.name}
        </div>
    )
};

export default Friend;
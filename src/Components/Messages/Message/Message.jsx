import React from "react";
import style from "./Message.module.sass";

const Message = (props) => {
    return (
        <div className={style.messagesWrapper}>
            {props.message}
        </div>
    )
};

export default Message;
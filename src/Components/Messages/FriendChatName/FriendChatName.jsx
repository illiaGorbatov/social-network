import React from "react";
import style from "./FriendChatName.module.sass";
import {NavLink} from "react-router-dom";

const FriendChatName = (props) => {
    let path = '/messages/' + props.id;

    return (
        <NavLink to={path} className={style.chat}>
            {props.name}
        </NavLink>
    )
};

export default FriendChatName;
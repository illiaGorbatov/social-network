import React from "react";
import style from "./Navigation.module.sass";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={style.navigationWrapper}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/newsfeed">Newsfeed</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/messages">Messages</NavLink>
        </div>
    )
};

export default Navigation;
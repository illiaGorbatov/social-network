import React from "react";
import style from "./Navigation.module.sass";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={style.navigationWrapper}>
            <NavLink to="/MainContent/MainContent">Content</NavLink>
            <NavLink to="/Messages/Messages">Messages</NavLink>
        </div>
    )
};

export default Navigation;
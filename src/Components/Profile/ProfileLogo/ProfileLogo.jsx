import React from "react";
import style from "./ProfileLogo.module.sass";
import {NavLink} from "react-router-dom";

const ProfileLogo = () => {
    return (
        <div className={style.profileHeader}>
            <div className={style.profileBackground}></div>
            <div className={style.userProfileInfo}>
                <div className={style.userPhoto}></div>
                <h1>UserName</h1>
                <span>UserInfo</span>
            </div>
            <div className={style.profileLinks}>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/photos'>Photos</NavLink>
                <NavLink to='/videos'>Videos</NavLink>
            </div>
        </div>
    )
};

export default ProfileLogo;
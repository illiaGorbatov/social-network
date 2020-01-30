import React from "react";
import style from "./ProfileLogo.module.sass";
import {NavLink} from "react-router-dom";

const ProfileLogo = (props) => {

    return (
        <div className={style.profileHeader}>
            <div className={style.profileBackground} style={{backgroundImage: `url(${props.photos.large})`}}></div>
            <div className={style.userProfileInfo}>
                <div className={style.userPhoto} style={{backgroundImage: `url(${props.photos.small})`}}></div>
                <h1>{props.fullName}</h1>
                <span>{props.aboutMe}</span>
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
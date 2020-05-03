import React from "react";
import style from "./SingleUser.module.sass";
import avatarImage from "../../../assets/User_Avatar.png"
import {NavLink} from "react-router-dom";

const SingleUser = (props) => {

    const follow = () => {
        props.followUser(props.userId)
    };
    const unfollow = () => {
        props.unfollowUser(props.userId)
    };

    let avatar = props.userAvatar ? props.userAvatar : avatarImage;

    return (
        <div className={style.userWrapper}>
            <NavLink to={`/profile/${props.userId}`}>
                <img src={avatar} className={style.userAvatar}/>
                <div className={style.userName}>{props.name}</div>
            </NavLink>
            <button className={style.followButton} onClick={props.followed ? unfollow : follow}
                    disabled={props.followingInProgress.some(id => id === props.userId)}>
                {props.followed ? 'unfollow' : 'follow'}
            </button>
        </div>
    )
};

export default SingleUser;
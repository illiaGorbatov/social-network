import React from "react";
import style from "./SingleUser.module.sass";
import avatarImage from "../../../assets/User_Avatar.png"

const SingleUser = (props) => {

    let followButtonClickHandler = () => {
        switch (props.followed) {
            case true:
                props.unfollowThisUser(props.userID);
                break;
            case false:
                props.followThisUser(props.userID);
                break;
            default:
                break;
        }
    };

    let avatar = props.userAvatar ? props.userAvatar : avatarImage;

    return (
        <div className={style.userWrapper}>
            <img src={avatar} className={style.userAvatar}/>
            <div className={style.userName}>{props.name}</div>
            <button className={style.followButton} onClick={followButtonClickHandler}>
                {props.followed ? 'unfollow' : 'follow'}
            </button>
        </div>
    )
};

export default SingleUser;
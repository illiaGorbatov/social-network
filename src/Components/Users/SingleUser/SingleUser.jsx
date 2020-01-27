import React from "react";
import style from "./SingleUser.module.sass";

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

    return (
        <div className={style.userWrapper}>
            <img src={props.userAvatar} className={style.userAvatar}/>
            <div className={style.userName}>{props.firstName} {props.secondName}</div>
            <div className={style.userLocation}>{props.country} {props.city}</div>
            <button className={style.followButton} onClick={followButtonClickHandler}>
                {props.followed ? 'unfollow' : 'follow'}
            </button>
        </div>
    )
};

export default SingleUser;
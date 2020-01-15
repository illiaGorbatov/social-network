import React from "react";
import style from "./Profile.module.sass";
import ProfileLogo from "./ProfileLogo/ProfileLogo";

const Profile = () => {
    return (
        <div className={style.profileWrapper}>
            <ProfileLogo />
        </div>
    )
};

export default Profile;
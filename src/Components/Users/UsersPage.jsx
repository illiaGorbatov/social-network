import React from "react";
import style from "./UsersPage.module.sass";
import SingleUser from "./SingleUser/SingleUser";


const UsersPage = (props) => {
    let users = props.users.map(user => <SingleUser key={user.id} userID={user.id} userAvatar={user.userAvatar}
    firstName={user.firstName} secondName={user.secondName} country={user.location.country}
    city={user.location.city} followed={user.followed} followThisUser={props.followThisUser}
    unfollowThisUser={props.unfollowThisUser}/>);

    return (
        <div className={style.usersPageWrapper}>
            <div className={style.usersWrapper}>
                {users}
            </div>
        </div>
    )
};

export default UsersPage;
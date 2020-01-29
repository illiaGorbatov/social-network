import React from "react";
import styles from "./UsersPage.module.sass";
import SingleUser from "./SingleUser/SingleUser";

const UsersPage = (props) => {
    let users = props.users.map(user => <SingleUser key={user.id} userID={user.id} userAvatar={user.photos.small}
    name={user.name} followed={user.followed} followThisUser={props.followThisUser}
    unfollowThisUser={props.unfollowThisUser}/>);

    let pageCount = Math.ceil(props.totalUsersCount / props.onPageUsersCount);
    let pages = [];
    for (let i=1; i<=pageCount; i++) {
        pages.push(i)
    };
    debugger

    return (
        <div className={styles.usersPageWrapper}>
            <div className={styles.usersWrapper}>
                {users}
            </div>
            <div className={styles.pageNumbers}>
                {pages.map(page => <span className={props.currentPage === page && styles.currentPage}
                onClick={() => props.onPageChange(page)}>{page}</span>)}
            </div>
        </div>
    )
};

export default UsersPage;
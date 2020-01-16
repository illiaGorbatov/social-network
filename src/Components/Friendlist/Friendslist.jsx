import React from "react";
import style from "./Friendlist.module.sass";
import Friend from "./Friend/Friend";

const Friendslist = (props) => {
    let friendlistElements = props.friends.map( friend => <Friend name={friend.name} id={friend.id} />);

    return (
        <div className={style.contentWrapper}>
            {friendlistElements}
        </div>
    )
};

export default Friendslist;
import React from "react";
import style from "./Friendlist.module.sass";
import Friend from "./Friend/Friend";

const Friendslist = () => {
    let friends = [
        {name: 'Гена', id: 1},
        {name: 'Жорик', id: 2},
        {name: 'Лаврентий', id: 3},
        {name: 'Дементий', id: 4},
    ];
    let friendlistElements = friends.map( friend => <Friend name={friend.name} id={friend.id} />);

    return (
        <div className={style.contentWrapper}>
            {friendlistElements}
        </div>
    )
};

export default Friendslist;
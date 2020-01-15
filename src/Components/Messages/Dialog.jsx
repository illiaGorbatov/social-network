import React from "react";
import style from "./Dialog.module.sass";
import Message from "./Message/Message";
import FriendChatName from "./FriendChatName/FriendChatName";

const Dialog = () => {
    let messages = [
        {message: 'норм', id: 1},
        {message: 'кодишь,', id: 2},
        {message: 'Хорёк =)', id: 3},
    ];
    let friendNameChat = [
        {name: 'Геннадий', id: 1},
        {name: 'Леша', id: 2},
        {name: 'Леонид', id: 3},
        {name: 'Лаврентий', id: 4},
    ];
    let friendChats = friendNameChat.map(friend => <FriendChatName name={friend.name} id={friend.id} />);
    let messagesElement = messages.map(message => <Message message={message.message} />);

    return (
        <div className={style.messagesWrapper}>
            <div className={style.chatNames}>
                {friendChats}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>

        </div>
    )
};

export default Dialog;
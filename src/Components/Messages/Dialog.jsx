import React from "react";
import style from "./Dialog.module.sass";
import Message from "./Message/Message";
import FriendChatName from "./FriendChatName/FriendChatName";

const Dialog = (props) => {
    let friendChats = props.chats.friends.map(friend => <FriendChatName name={friend.name} id={friend.id} />);
    let messagesElement = props.chats.messages.map(message => <Message message={message.message} />);

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
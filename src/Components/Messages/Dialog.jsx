import React from "react";
import style from "./Dialog.module.sass";
import Message from "./Message/Message";
import FriendChatName from "./FriendChatName/FriendChatName";

const Dialog = (props) => {
    debugger;
    let friendChats = props.chat.friends.map(friend => <FriendChatName name={friend.name} id={friend.id}/>);
    let messagesElements = props.chat.messages.map(message => <Message message={message.message}/>);

    let updateChatInputHandler = (event) => {
        let inputValue = event.target.value;
        props.updateChatInput(inputValue);
    };

    return (
        <div className={style.messagesWrapper}>
            <div className={style.chatNames}>
                {friendChats}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <input onChange={updateChatInputHandler} value={props.chat.chatInputCurrentValue}/>
            <button onClick={props.sendMessage}>Send</button>
        </div>
    )
};

export default Dialog;
import React from "react";
import style from "./Dialog.module.sass";
import Message from "./Message/Message";
import FriendChatName from "./FriendChatName/FriendChatName";
import {sendMessageCreator, updateChatInputValueCreator} from "../../Data/Data";

const Dialog = (props) => {
    let friendChats = props.chats.friends.map(friend => <FriendChatName name={friend.name} id={friend.id}/>);
    let messagesElement = props.chats.messages.map(message => <Message message={message.message}/>);

    let updateChatInputHandler = (event) => {
        let inputValue = event.target.value;
        props.dispatch(updateChatInputValueCreator(inputValue))
    };
    let sendMessageButtonHandler = () => {
        props.dispatch(sendMessageCreator())
    };


    return (
        <div className={style.messagesWrapper}>
            <div className={style.chatNames}>
                {friendChats}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
            <input onChange={updateChatInputHandler} value={props.chats.chatInputCurrentValue}/>
            <button onClick={sendMessageButtonHandler}>Send</button>
        </div>
    )
};

export default Dialog;
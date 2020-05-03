import React from "react";
import Message from "./Message/Message";
import FriendChatName from "./FriendChatName/FriendChatName";
import styled from "styled-components";

const MessagesWrapper = styled.div`
  background-color: azure;
  grid-area: content;
  margin-left: 200px;
`;

const ChatNames = styled.div`
  width: 100px;
`;

const Messages = styled.div`
  float: right
`;

const Dialog = (props) => {
    let friendChats = props.chat.friends.map(friend => <FriendChatName name={friend.name} id={friend.id}/>);
    let messagesElements = props.chat.messages.map(message => <Message message={message.message}/>);

    let updateChatInputHandler = (event) => {
        let inputValue = event.target.value;
        props.updateChatInput(inputValue);
    };

    return (
        <MessagesWrapper>
            <ChatNames>
                {friendChats}
            </ChatNames>
            <Messages>
                {messagesElements}
            </Messages>
            <input onChange={updateChatInputHandler} value={props.chat.chatInputCurrentValue}/>
            <button onClick={props.sendMessage}>Send</button>
        </MessagesWrapper>
    )
};

export default Dialog;
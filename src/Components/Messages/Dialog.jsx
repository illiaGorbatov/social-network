import React from "react";
import Message from "./Message/Message";
import FriendChatName from "./FriendChatName/FriendChatName";
import styled from "styled-components";
import {Field, reduxForm} from "redux-form";

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

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'} component={'textarea'} placeholder={'Text your message'}/>
            <button>Send</button>
        </form>
    )
};

const ReduxDialogForm = reduxForm({form: 'Messages'})(DialogForm)

const Dialog = (props) => {
    let friendChats = props.chat.friends.map(friend => <FriendChatName name={friend.name} id={friend.id}/>);
    let messagesElements = props.chat.messages.map(message => <Message message={message.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.message)
    };

    return (
        <MessagesWrapper>
            <ChatNames>
                {friendChats}
            </ChatNames>
            <Messages>
                {messagesElements}
            </Messages>
            <ReduxDialogForm onSubmit={addNewMessage}/>
        </MessagesWrapper>
    )
};

export default Dialog;
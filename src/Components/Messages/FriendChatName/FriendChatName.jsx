import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Chat = styled(NavLink)`
  border: 2px solid black;
  border-radius: 3px;
`;

const FriendChatName = (props) => {
    let path = '/messages/' + props.id;

    return (
        <Chat to={path}>
            {props.name}
        </Chat>
    )
};

export default FriendChatName;
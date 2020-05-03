import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  border-bottom: 2px solid black
`;

const Message = (props) => {
    return (
        <MessageWrapper>
            {props.message}
        </MessageWrapper>
    )
};

export default Message;
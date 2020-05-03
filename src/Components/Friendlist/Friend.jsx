import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: aqua;
  grid-area: content;
`;

const Friend = (props) => {

    return (
        <ContentWrapper>
            {props.name}
        </ContentWrapper>
    )
};

export default Friend;
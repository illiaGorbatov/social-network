import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: aqua;
  grid-area: content;
`;

const Newsfeed = () => {
    return (
        <ContentWrapper>
            Newsfeed
        </ContentWrapper>
    )
};

export default Newsfeed;
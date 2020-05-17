import React from 'react';
import styled from "styled-components";

const PreloaderWrapper = styled.div`
  background-color: azure;
  grid-area: content;
  margin-left: 200px;
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const Preloader = () => {
    return(
        <PreloaderWrapper>
            <Text>
                Preloader
            </Text>
        </PreloaderWrapper>
    )
}

export default Preloader
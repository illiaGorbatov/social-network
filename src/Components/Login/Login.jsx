import React from 'react';
import styled from "styled-components";

const LoginWrapper = styled.div`
  background-color: azure;
  grid-area: content;
  margin-left: 200px;
  text-align: center;
`;

const Login = () => {
    return(
        <LoginWrapper>
            Login
        </LoginWrapper>
    )
};

export default Login
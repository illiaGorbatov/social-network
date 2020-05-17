import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: red;
  grid-area: header;
  display: flex;
  justify-content: space-between;
`;

const MainLogo = styled.div`
  background-color: gold;
  background-image: url("https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg");
  max-width: 100px;
`;

const PageName = styled.div`
  text-transform: uppercase
`;

const HeaderInput = styled.div`
  background-color: yellow;
  height: 90px;
  width: 200px;
`;


const Header = (props) => {
    return (
        <HeaderWrapper>
            <MainLogo/>
            <PageName>Profile<br/>Page</PageName>
            <HeaderInput>
                {props.isAuth ? <div> {props.login} <button onClick={props.logout}>logout</button> </div>:
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>}
            </HeaderInput>
        </HeaderWrapper>
    )
};

export default Header;
import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  background-color: azure;
  position: absolute;
  height: calc( 100vh - 100px );
  left: 0;
  top: 100px;
`;

const NavigationLink = styled(NavLink)`
  display: block;
  margin: 20px 15px;
`;


const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationLink to="/profile">Profile</NavigationLink>
            <NavigationLink to="/newsfeed">Newsfeed</NavigationLink>
            <NavigationLink to="/friendlist">Friends</NavigationLink>
            <NavigationLink to="/messages">Messages</NavigationLink>
            <NavigationLink to="/users">Users</NavigationLink>
        </NavigationWrapper>
    )
};

export default Navigation;
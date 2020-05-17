import React from "react";
import styled from "styled-components";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileHeader = styled.div`
  max-width: 1260px;
  margin: 50px auto;
  border-radius: 10px;
  background-color: antiquewhite;
  position: relative;
`;

const ProfileBackground = styled.div`
  width: 1260px;
  height: 450px;
`;

const UserProfileInfo = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  & > h1 {
      margin: 3px 0
  };
`;

const UserPhoto = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-radius: 50%;
`;

const ProfileLogo = (props) => {

    return (
        <ProfileHeader>
            <ProfileBackground style={{backgroundImage: `url(${props.photos.large})`}}/>
            <UserProfileInfo>
                <UserPhoto style={{backgroundImage: `url(${props.photos.small})`}}/>
                <h1>{props.fullName}</h1>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </UserProfileInfo>
        </ProfileHeader>
    )
};

export default ProfileLogo;
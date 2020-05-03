import React from "react";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  background-color: aqua;
  grid-area: content;
`;

const AllElemsWrapper = styled.div`
  margin: 50px auto;
  max-width: 1256px;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: auto;
  grid-template-areas: "profile-intro posts profile-info";
`;

const PostsWrapper = styled.div`
  grid-template: "posts";
  border: black 2px solid;
  border-radius: 20px;
  margin-right: 50px;
`;

const Placeholder1 = styled.div`
  grid-template: "profile-intro";
  border: black 2px solid;
  border-radius: 20px;
  margin-right: 50px;
`;

const Placeholder2 = styled.div`
  grid-template: "profile-info";
  border: black 2px solid;
  border-radius: 20px;
`;

const Profile = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} id={post.id} postContent={post.post}/>);

    return (
        <ProfileWrapper>
            <ProfileLogo photos={props.userInfo.photos} fullName={props.userInfo.fullName} aboutMe={props.userInfo.aboutMe}/>
            <AllElemsWrapper>
                <Placeholder1>placeholder</Placeholder1>
                <PostsWrapper>
                    <AddPost addPost={props.addPost} addPostInputChange={props.addPostInputChange}
                             postInputValue={props.postInputValue}/>
                    {posts}
                </PostsWrapper>
                <Placeholder2>placeholder</Placeholder2>
            </AllElemsWrapper>
        </ProfileWrapper>
    )
};

export default Profile;
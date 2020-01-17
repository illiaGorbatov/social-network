import React from "react";
import style from "./Profile.module.sass";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const Profile = (props) => {
    let posts = props.posts.map(post => <Post id={post.id} postContent={post.post}/>);

    return (
        <div className={style.profileWrapper}>
            <ProfileLogo/>
            <AddPost addPost={props.addPost}/>
            {posts}
        </div>
    )
};

export default Profile;
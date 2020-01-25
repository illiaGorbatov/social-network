import React from "react";
import style from "./Profile.module.sass";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const Profile = (props) => {
    let posts = props.profile.posts.map(post => <Post id={post.id} postContent={post.post}/>);

    return (
        <div className={style.profileWrapper}>
            <ProfileLogo/>
            <div className={style.allElemsWrapper}>
                <div className={style.placeholder1}>placeholder</div>
                <div className={style.postsWrapper}>
                    <AddPost addPost={props.addPost} addPostInputChange={props.addPostInputChange}
                             postInputValue={props.profile.postInputValue}/>
                    {posts}
                </div>
                <div className={style.placeholder2}>placeholder</div>
            </div>
        </div>
    )
};

export default Profile;
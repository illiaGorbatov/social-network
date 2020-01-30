import React from "react";
import style from "./Profile.module.sass";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const Profile = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} id={post.id} postContent={post.post}/>);
debugger
    return (
        <div className={style.profileWrapper}>
            <ProfileLogo photos={props.userInfo.photos} fullName={props.userInfo.fullName} aboutMe={props.userInfo.aboutMe}/>
            <div className={style.allElemsWrapper}>
                <div className={style.placeholder1}>placeholder</div>
                <div className={style.postsWrapper}>
                    <AddPost addPost={props.addPost} addPostInputChange={props.addPostInputChange}
                             postInputValue={props.postInputValue}/>
                    {posts}
                </div>
                <div className={style.placeholder2}>placeholder</div>
            </div>
        </div>
    )
};

export default Profile;
import React from "react";
import {addPost, addPostInputChange, setUserInfo} from "../../Redux/Profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends  React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserInfo(response.data);
            })
    }

    render() {
        return (
            <Profile userInfo={this.props.userInfo} posts={this.props.posts} postInputValue={this.props.postInputValue}
                     addPost={this.props.addPost} addPostInputChange={this.props.addPostInputChange}
                     setUserInfo={this.props.setUserInfo}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.profile.userInfo,
        posts: state.profile.posts,
        postInputValue: state.profile.postInputValue
    }
};

let UrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {addPost, addPostInputChange, setUserInfo}) (UrlDataContainerComponent);

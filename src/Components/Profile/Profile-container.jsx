import React from "react";
import {addPost, addPostInputChange, getUserPage} from "../../Redux/Profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId === undefined) userId = "6166"
        this.props.getUserPage(userId)
    }

    render() {
        return (
            <Profile userInfo={this.props.userInfo} posts={this.props.posts} postInputValue={this.props.postInputValue}
                     addPost={this.props.addPost} addPostInputChange={this.props.addPostInputChange}
            />
        )
    }
};


const mapStateToProps = (state) => {
    return {
        userInfo: state.profile.userInfo,
        posts: state.profile.posts,
        postInputValue: state.profile.postInputValue,
    }
};

export default compose(connect(mapStateToProps, {
    addPost,
    addPostInputChange,
    getUserPage
}), withRouter, withAuthRedirect)(ProfileContainer)

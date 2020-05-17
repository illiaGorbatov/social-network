import React from "react";
import {addPost, getStatus, getUserPage, updateStatus} from "../../Redux/Profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) this.props.history.push('/login')
        }
        this.props.getUserPage(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
            />
        )
    }
};


const mapStateToProps = (state) => {
    return {
        userInfo: state.profile.userInfo,
        posts: state.profile.posts,
        status: state.profile.status,
        authorisedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps, {
    addPost,
    getUserPage, getStatus, updateStatus
}), withRouter, withAuthRedirect)(ProfileContainer)

import React from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {followUser, getUsers, unfollowUser} from "../../Redux/Users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getOnPageUsersCount,
    getUsersCount,
    getUsersSelect
} from "../../Redux/users-selectors";

class UsersPageContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.onPageUsersCount)
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.onPageUsersCount)
    };

    render() {
        return (<UsersPage {...this.props}
                           onPageChange={this.onPageChange}
            />
        )
    }
};


const mapStateToProps = (state) => {
    return {
        users: getUsersSelect(state),
        totalUsersCount: getUsersCount(state),
        onPageUsersCount: getOnPageUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default connect(mapStateToProps, {unfollowUser, followUser, getUsers})(UsersPageContainer)


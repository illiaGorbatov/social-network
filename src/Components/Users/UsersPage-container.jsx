import React from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {
    getUsers,
    followUser, unfollowUser
} from "../../Redux/Users-reducer";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

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
        users: state.users.usersList,
        totalUsersCount: state.users.totalUsersCount,
        onPageUsersCount: state.users.onPageUsersCount,
        currentPage: state.users.currentPage,
        followingInProgress: state.users.followingInProgress,
    }
};

export default compose(connect(mapStateToProps, {unfollowUser, followUser, getUsers}),
    withAuthRedirect)(UsersPageContainer)


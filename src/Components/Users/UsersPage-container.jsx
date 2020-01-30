import React from "react";
import * as axios from "axios";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {
    followThisUser, unfollowThisUser, setUsers, setUsersTotalCount, setCurrentPage
} from "../../Redux/Users-reducer";

class UsersPageContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.onPageUsersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.onPageUsersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
    };

    render() {
        return (<UsersPage users={this.props.users}
                           followThisUser={this.props.followThisUser} unfollowThisUser={this.props.unfollowThisUser}
                           onPageUsersCount={this.props.onPageUsersCount} totalUsersCount={this.props.totalUsersCount}
                           currentPage={this.props.currentPage} setCurrentPage={this.props.setCurrentPage}
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
        currentPage: state.users.currentPage
    }
};

export default connect(mapStateToProps,
    {followThisUser, unfollowThisUser, setUsers, setUsersTotalCount, setCurrentPage})(UsersPageContainer);


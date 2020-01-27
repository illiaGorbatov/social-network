import React from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {followThisUserAC, unfollowThisUserAC} from "../../Redux/Users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.usersList,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        followThisUser: (id) => {
            dispatch(followThisUserAC(id))
        },
        unfollowThisUser: (id) => {
            dispatch(unfollowThisUserAC(id))
        }
    }
};

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps) (UsersPage);

export default UsersPageContainer;
import React from "react";
import Profile from "./Profile";
import {addPostCreator, updateAddPostInputValueCreator} from "../../Redux/Profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        addPostInputChange: (inputValue) => {
            dispatch(updateAddPostInputValueCreator(inputValue))
        }
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;
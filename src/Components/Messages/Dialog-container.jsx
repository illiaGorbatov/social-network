import React from "react";
import {sendMessageCreator, updateChatInputValueCreator} from "../../Redux/Messages-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";


const mapStateToProps = (state) => {
    return {
        chat: state.chat,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateChatInput: (inputValue) => {
            dispatch(updateChatInputValueCreator(inputValue))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog)
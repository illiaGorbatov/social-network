import React from "react";
import {sendMessageCreator} from "../../Redux/Messages-reducer";
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
        sendMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage))
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog)
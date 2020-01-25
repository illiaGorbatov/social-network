import React from "react";
import {sendMessageCreator, updateChatInputValueCreator} from "../../Redux/Messages-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";


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

const DialogContainer = connect(mapStateToProps, mapDispatchToProps) (Dialog);

export default DialogContainer;
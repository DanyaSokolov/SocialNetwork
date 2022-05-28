import React from "react";
import { ADD_MESSAGE } from "../../../State/messages_section";
import { TEXT_MESSAGE } from "../../../State/messages_section";
import Messages_right from "./ContentRight";
import { connect } from "react-redux";
// import NavigatePage  from "../../../hoc";   

const mapStateToProps = (state) => {
    return {
        speakers: state.messagesSection.PageMessages.speakers,
        messages: state.messagesSection.PageMessages.messages,
        isAuth: state.authSection.isAuth,
        me: state.profileSection.me
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost_container: (content, User) => {
            dispatch(ADD_MESSAGE(content, User))
        },
        newMessageText_container: (text) => {
            dispatch(TEXT_MESSAGE(text))
        }
    }
}

// let NavigateComponent = NavigatePage(Messages_right)

const Messages_right_container_connect = connect(mapStateToProps, mapDispatchToProps)(Messages_right);

export default Messages_right_container_connect;
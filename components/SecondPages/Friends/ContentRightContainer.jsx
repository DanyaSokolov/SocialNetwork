import React from "react";
import Friends_right from "./ContentRight";
import { connect } from "react-redux";
// import NavigatePage  from "../../../hoc"; 
import { deleteFriend } from "../../../State/friends_section"

const mapStateToProps = (state) => {
    return {
        friends: state.friendsSection.friends,
        isAuth: state.authSection.isAuth
    }
}

// let NavigateComponent = NavigatePage(Friends_right)

const Friends_right_container_connect = connect(mapStateToProps, {deleteFriend: deleteFriend})(Friends_right);

export default Friends_right_container_connect;
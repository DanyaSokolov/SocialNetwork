import React from "react";
import ContentRight from "./ContentRight";
import { connect } from "react-redux";
import { toLike, unLike, toSave, unSave } from "../../State/home_section";

const mapStateToProps = (state) => {
    return {
        homePosts: state.homeSection.homePosts,
        isAuth: state.authSection.isAuth,
        user: state.profileSection.me
    }
}

const ContentRight_container_connect = connect(mapStateToProps, {
    toLike: toLike,
    unLike: unLike,
    toSave: toSave,
    unSave: unSave
})(ContentRight);

export default ContentRight_container_connect; 
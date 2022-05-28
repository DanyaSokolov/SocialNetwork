import React from "react";
import { connect } from "react-redux";
import Profile_right from "./ContentRight";
// import NavigatePage  from "../../../hoc";
import { compose } from "redux";
import { toLike, unLike, toSave, unSave } from "../../../State/home_section";
import { updateStatusThunk, getStatusThunk } from "../../../State/profileUser_section";
import { setPhoto, getMyProfileThunk } from "../../../State/profile_section";
import { logOutThunk } from "../../../State/auth_section";

const mapStateToProps = (state) => {
    
    return {
        myPosts: state.profileSection.myPosts,
        isAuth: state.authSection.isAuth,
        login: state.authSection.login,
        id: state.authSection.id,
        status: state.profileUserSection.status,
        user: state.profileSection.me,
        photoCh: state.profileSection.photoCh
    }
}

export default compose(
    connect(mapStateToProps, {
        toLike: toLike, 
        unLike: unLike,
        toSave: toSave,
        unSave: unSave,
        updateStatusThunk,
        getStatusThunk,
        logOutThunk,
        getMyProfileThunk,
        setPhoto
    }),
    // NavigatePage
)(Profile_right);
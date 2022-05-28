import React from "react";
import ContentRight_Profile_User from "./ContentRightUP";
import { getProfileThunk, getStatusThunk } from "../../../State/profileUser_section";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Content_right_container(props) {
    var params = useParams()
    useEffect(() => {
        props.getProfileThunk(params.userId)    
        props.getStatusThunk(params.userId)
    }, []);
    return (
        <ContentRight_Profile_User status={props.status} isFetch={props.isFetch} user={props.user} />
    )
}

let mapStateToProps = (state) => {
    return {
        status: state.profileUserSection.status,
        user: state.profileUserSection.user,
        isFetch: state.profileUserSection.isFetch,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUserP: (user) => {
//             dispatch(setUserP(user))
//         },
//         isLoad: (load) => {
//             dispatch(isLoad(load))
//         },
//         getProfileThunk: (something) => {
//             dispatch:(getProfileThunk(something))
//         }
//      }
// }


const content_right_container_connect = connect(mapStateToProps, {
    getProfileThunk,
    getStatusThunk
})(Content_right_container);

export default content_right_container_connect;
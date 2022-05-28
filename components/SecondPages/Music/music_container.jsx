import React from "react";
import Music from "./music";
import { connect } from "react-redux";
// import NavigatePage  from "../../../hoc";

const music_container = (props) => {
    return <Music />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authSection.isAuth
    }
}

// let NavigateComponent = NavigatePage(music_container)

const music_container_connect = connect(mapStateToProps)(music_container)

export default music_container_connect;
import React from "react";
import Settings from "./settings";
import { connect } from "react-redux";
// import NavigatePage  from "../../../hoc";

const settings_container = (props) => {
    return <Settings />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authSection.isAuth
    }
}

// let NavigateComponent = NavigatePage(settings_container)

const settings_container_connect = connect(mapStateToProps)(settings_container)

export default settings_container_connect;
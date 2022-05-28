import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { authMeThunk } from "../../State/auth_section";
import { connect } from "react-redux";
import { get_isAuth, get_login, get_isFetch } from "../../Selectors/header_selector";
import { getMyProfileThunk } from "../../State/profile_section";

class Header_container extends React.Component {
    componentDidMount() {
        // this.props.isLoadLog(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //      withCredentials: true,
        //      headers: {
        //         'api-key': '3183939b-27f9-4f50-956c-849001487a71'
        //     }
        
        //     }).then(response => {
        //     if(response.data.resultCode === 0) {
        //         this.props.isLoadLog(false)
        //         let {id, email, login} = response.data.data
        //         this.props.setUserData(id, email, login)
        //     }
        // })
        // this.props.authMeThunk()
        // this.props.getMyProfileThunk(22495)
        // this.props.getMyProfileThunk(this.props.id)
        
    }

    render() {
        return <Header user={this.props.user} isAuth={this.props.isAuth} 
        login={this.props.login}
        isFetch={this.props.isFetch}
        />
    }
}

let mapStateToProps = (state) => ({
     isAuth: get_isAuth(state),
     login: get_login(state),
     isFetch: get_isFetch(state),
     user: state.profileSection.me,
     id: state.authSection.id
})

export default connect(mapStateToProps, {authMeThunk, getMyProfileThunk})(Header_container);
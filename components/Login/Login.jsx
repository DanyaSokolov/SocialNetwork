import React from "react";
import { reduxForm, Field } from "redux-form";
import Log from "./Login.module.css";
import { connect } from "react-redux";
import { logInThunk } from "../../State/auth_section";
import { NavLink } from "react-router-dom";

const RegistrationForm = (props) => { 
    return ( 
        <form onSubmit={props.handleSubmit}> 
            <div>
                <Field name="email" component={"input"} className={Log.inp} placeholder="Email" type="text"></Field>
                {/* <span className={Log.span}>daniilsokolov15012006@gmail.com</span> */}
            </div>
            <div>
                <Field name="password" component={"input"} className={Log.inp} placeholder="Password" type="password"></Field>
                {/* <span className={Log.span}>1234</span> */}
            </div>
            <div>
                <Field name="rememberMe" component={"input"} className={Log.rem} placeholder="Login" type="checkbox"></Field>
                <span className={Log.rem_text}>Remember me</span>
            </div>
            {props.captchaUrl &&
            <div>
            <div><img className={Log.img_cap} src={props.captchaUrl}></img></div>
            <Field name="captcha" component={"input"} className={Log.inp_cap} placeholder="" type="text"></Field>
            </div>}
            <button className={Log.nav_link_sub_2}>
                <div className={Log.nav_link_sub2_2}>Log in</div>
            </button>
            <div className={Log.p}>If you are not registered on the site, follow this link: <br/>
             <a className={Log.p_a} href="https://social-network.samuraijs.com">https://social-network.samuraijs.com</a></div>
             <div className={Log.p}>To log out, go to the <br/>
             <NavLink className={Log.p_a} to="/MyProfile" >Profile</NavLink> page and click the "Log out" button.</div>
        </form>
    )
}

const ReduxRegistrationForm = reduxForm({ form: "login" })(RegistrationForm)

const Registration = (props) => {

    const onSubmit = (formData) => {
        props.logInThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
 
    return (
        // <div className={Log.main_right}>
        //     <div className={Log.block_name}>Login</div>
            <ReduxRegistrationForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
        // </div>
    )
}

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.authSection.captchaUrl,
    }
}


export default connect(mapStateToProps, { logInThunk })(Registration);
import React from "react";
import { reduxForm, Field } from "redux-form";
import Log from "./Login.module.css";
import { connect } from "react-redux";
import { logInThunk } from "../../State/auth_section";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegistrationForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        props.logInThunk(data.email, data.password, data.rememberMe, data.captcha)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input className={Log.inp} placeholder="Email" type="text" {...register("email", {
                    required: "The field must not be empty!"
                })}></input>
                <span className={Log.spanM}>
                    <span className={Log.spanSl}>//</span>
                    <span className={Log.span}>daniilsokolov15012006@gmail.com</span>
                </span>
            </div>
            <div>
                {errors?.email && <div className={Log.error_val}>{errors?.email?.message || "Error!"}</div>}
            </div>
            <div>
                <input {...register("password", {
                    required: "The field must not be empty!"
                })} name="password" className={Log.inp} placeholder="Password" type="password"></input>
                <span className={Log.spanM}>
                    <span className={Log.spanSl}>//</span>
                    <span className={Log.span}>1234</span>
                </span>
            </div>
            <div>
                {errors?.password && <div className={Log.error_val}>{errors?.password?.message || "Error!"}</div>}
            </div>
            <div>
                {props.isErrorEmailPassword && <div className={Log.error_val}>Check if your email and password are correct.</div>}
            </div>
            <div>
                <input {...register("rememberMe")} name="rememberMe" className={Log.rem} placeholder="Login" type="checkbox"></input>
                <span className={Log.rem_text}>Remember me</span>
            </div>
            {props.captchaUrl &&
                <div>
                    <div>
                        <div><img className={Log.img_cap} src={props.captchaUrl}></img></div>
                        <input {...register("captcha")} name="captcha" className={Log.inp_cap} placeholder="" type="text"></input>
                    </div>
                    <div>
                        <div className={Log.error_val}>Complete the captcha.</div>
                    </div>
                </div>}
            <button className={Log.nav_link_sub_2}>
                <div className={Log.nav_link_sub2_2}>Log in</div>
            </button>
            <div className={Log.p}>If you are not registered on the site, follow this link: <br />
                <a className={Log.p_a} href="https://social-network.samuraijs.com">https://social-network.samuraijs.com</a></div>
            <div className={Log.p}>To log out, go to the <br />
                <NavLink className={Log.p_a} to="/MyProfile" >Profile</NavLink> page and click the "Log out" button.</div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.authSection.captchaUrl,
        isErrorEmailPassword: state.authSection.isErrorEmailPassword,
        // isErrorCaptcha: state.authSection.isErrorCaptcha
    }
}


export default connect(mapStateToProps, { logInThunk })(RegistrationForm);
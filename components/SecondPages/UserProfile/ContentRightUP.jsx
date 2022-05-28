import React from "react";
import contentRight from "./ContentRightUP.module.css";
import Loading from "../../../loading.png";
import { NavLink } from "react-router-dom";
import User from "../../../user_logo_two.png";

const ContentRight_Profile_User = (props) => {

  let userHref = "https://danyasokolov.github.io/SocialNetwork/#/profile/" + props.user.userId

  return (
    <div className={contentRight.main_right}>
      <div className={contentRight.block_name}>
        <div>User profile</div>
        <NavLink className={contentRight.nav_link} to="/Friends/Find">
          <div className={contentRight.find_people}>Back</div>
        </NavLink>
      </div>
      {props.isFetch ?
        <div className={contentRight.loading_main}>
          <img className={contentRight.loading} src={Loading}></img>
        </div>
        :
        <div className={contentRight.profile_top}>
          <div className={contentRight.prof_logo}>
            <img id={contentRight.mainLogo2} src={props.user.photos.large != null ? props.user.photos.large : User} />
          </div>
          <div className={contentRight.prof_data}>
            <div className={contentRight.settings}>
              <div className={contentRight.data_name}>
                {props.user.fullName}
              </div>
            </div>
            <div className={contentRight.status_inp2}>
              Status: {props.status}
            </div>
            <div className='data_city data_total'>
              Id: {props.user.userId}
            </div>
            <div className={contentRight.link_web_m}>
              Web-site: <a className={contentRight.link_web} href={userHref}>
              {userHref}</a>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ContentRight_Profile_User;
import React from "react";
import { NavLink } from "react-router-dom";
import content from "./Content.module.css";

const Content = (props) => {
  return (
    <div>
      <div className={content.a_user}>
        <div className={content.user_main}>
          <div className={content.user_main2}>
             <img className={content.logo_user} src={props.user} />
            <div className={content.name}>{props.name}</div>
          </div>
            <button onClick={() => {props.deleteFriend(props.friendKey)}} className={content.nav_link_sub_2}>
                <div className={content.nav_link_sub2_2}>Delete</div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Content;
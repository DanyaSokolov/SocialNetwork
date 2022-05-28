import React from "react";
import content from "./Content.module.css";
import imgToChat from "../../../../chat.png";
import imgToLike from "../../../../like.png";
import imgLiked from "../../../../like2.png";
import imgToSave from "../../../../save.png";
import imgSaved from "../../../../save2.png";
import { NavLink } from "react-router-dom";

const Content = (props) => {
  return (
    <div>
      <div className={content.user_main}>
        {/* <img className={content.logo_user} src={props.user} /> */}
        <NavLink to="/MyProfile"><img className={content.logo_user} src={props.me.photos.small != null ? props.me.photos.small : props.user} /></NavLink>
        <div className={content.name}>{props.name}</div>
      </div>
      <div className={content.user_text}>
        <div className={content.user_text2}>{props.text}</div>
      </div>
      <div className={content.user_img}>
        <img className={content.user_img2} src={props.logo} />
      </div>
      <div className={content.feedback}>
        <div className={content.feedback2}>
          <img className={content.imgToDo} src={imgToChat} />
          <div className={content.feedback_name}>Comment</div>
        </div>
        {
          props.liked ?
            <div onClick={() => { props.unLike(props.postId) }} className={content.feedback2}>
              <img className={content.imgToDo} src={imgLiked} />
              <div className={content.feedback_name}>Liked</div>
            </div> :
            <div onClick={() => { props.toLike(props.postId) }} className={content.feedback2}>
              <img className={content.imgToDo} src={imgToLike} />
              <div className={content.feedback_name}>Like</div>
            </div>
        }
        {
          props.saved ?
            <div onClick={() => { props.unSave(props.postId) }} className={content.feedback2}>
              <img className={content.imgToDo} src={imgSaved} />
              <div className={content.feedback_name}>Saved</div>
            </div> :
            <div onClick={() => { props.toSave(props.postId) }} className={content.feedback2}>
              <img className={content.imgToDo} src={imgToSave} />
              <div className={content.feedback_name}>Save</div>
            </div>
        }
      </div>
    </div>
  )
}

export default Content;
import React from "react";
import content from "./Content2.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={content.content_text}> 
      {props.isMe ?
        <NavLink to="/MyProfile"><img className={content.logo_user} src={props.me.photos.small != null ? props.me.photos.small : props.user} /></NavLink>
      :
      <NavLink to=""><img className={content.logo_user} src={props.logo}></img></NavLink>}
      <div id="text" className={content.text}>{props.message}</div>
    </div>
  )
} 

const Content = (props) => {

  const messagesFilter = props.messages.map( el => <Dialog isMe={el.isMe} me={props.me} key={el.id} logo={el.logo} message={el.message} />);

  return (
    <div className={content.block_main}>
      <div className={content.block_main2}>
        { messagesFilter }
      </div>
    </div>
  )
}

export default Content;



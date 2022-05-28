import React from "react";
import { NavLink } from "react-router-dom";
import contentLeft from './ContentLeft.module.css';
import Home from "../../house.png";
import Profile from "../../profile.png";
import Friends from "../../friends.png";
import Music from "../../music.png";
import Login from "../../login.png";
import Settings from "../../settings.png";
import Messages from "../../messages.png";

const ContentLeft = () => {
    return (
      <div className={contentLeft.main_left}>
       <div className={contentLeft.main_left2}>
        <NavLink className={contentLeft.a_left} to='/'><div className={contentLeft.ect_left}>Home<img className={contentLeft.img_left} src={Home}></img></div></NavLink>
        <NavLink className={contentLeft.a_left} to='/MyProfile'><div className={contentLeft.ect_left}>Profile<img className={contentLeft.img_left} src={Profile}></img></div></NavLink>
        <NavLink className={contentLeft.a_left} to='/Friends'><div className={contentLeft.ect_left}>Friends<img className={contentLeft.img_left} src={Friends}></img></div></NavLink>
        <NavLink className={contentLeft.a_left} to='/Messages'><div className={contentLeft.ect_left}>Messages<img className={contentLeft.img_left} src={Messages}></img></div></NavLink>
        <NavLink className={contentLeft.a_left} to='/Music'><div className={contentLeft.ect_left}>Music<img className={contentLeft.img_left} src={Music}></img></div></NavLink>
        <div className={contentLeft.line_und_mus}></div>
        <NavLink className={contentLeft.a_left} to='/Login'><div className={contentLeft.ect_left}>Login<img className={contentLeft.img_left} src={Login}></img></div></NavLink>
        <NavLink className={contentLeft.a_left} to='/Settings'><div className={contentLeft.ect_left_set}>Settings<img className={contentLeft.img_left} src={Settings}></img></div></NavLink>
       </div>
      </div>
    )
} 

export default ContentLeft;
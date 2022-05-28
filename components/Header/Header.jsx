import React from "react";
import bellHead from "../../bell.png";
import imgLogo from "../../user_logo.png";
import imgLogo2 from "../../user_logo_two.png";
import header from './Header.module.css';
import search from '../../search.png'
import Loading from "../../loading.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {

  return (
    <div className={header.main_head}>
      <div className={header.main_head2}>
        <div className={header.head}>
          <img id={header.mainLogo} src={imgLogo} />
        </div>
        <input className={header.input_search_main} type="text" placeholder="Search..">
        </input>
        <img id={header.searchHead} src={search} />
        <div>
          <img id={header.bellHead} src={bellHead} />
        </div>
      </div>
      <div className={header.acc_change}>
        {props.isAuth ?
          <div className={header.profile_data}>
            <div className={header.nav_link_sub_1} >
              <div className={header.nav_link_sub2_1}>{props.login}</div>
            </div>
            <div className={header.logo_arrow_left}>
              <div className={header.logo_arrow_left2}>
                <div>
                  <NavLink to="/MyProfile">{props.isAuth &&
                    <img id={header.mainLogo3} src={props.user.photos.large != null ? props.user.photos.large : imgLogo2} />}</NavLink>
                </div>
              </div>
            </div>
          </div>
          : <div className={header.profile_data}>
            <NavLink className={header.nav_link} to="/Login">
              <button className={header.nav_link_sub_2}>
                <div className={header.nav_link_sub2_2}>Log in</div>
              </button>
            </NavLink>
            <div className={header.loading_main}>
              <img className={header.loading} src={Loading}></img>
            </div>
          </div>
        }
        {/* {props.isFetch &&
          <div className={header.loading_main}>
            <img className={header.loading} src={Loading}></img>
          </div>} */}
      </div>
    </div>
  )
}

export default Header;
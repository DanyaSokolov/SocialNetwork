import React from "react";
import contentRight from './ContentRight.module.css';
import ContentUser from "./components/Content.jsx";
import { NavLink } from "react-router-dom";
import LoadingIcon from "../../../LoadingIcon/LoadingIcon";

const Friends_right = (props) => {

    const FriendsFilter = props.friends.map(el => <ContentUser deleteFriend={props.deleteFriend} key={el.id} friendKey={el.id} name={el.name} user={el.user} />);

    // return (
    //     <div className={contentRight.main_right}>
    //         <div className={contentRight.block_name}>
    //             <div>Friends</div>
    //             <NavLink className={contentRight.nav_link} to="/Friends/Find">
    //                     <div className={contentRight.find_people}>Find users</div>
    //             </NavLink>
    //         </div>
    //         <div className={contentRight.main_right2}>
    //             {FriendsFilter}
    //         </div>
    //     </div>
    // )

    if (props.isAuth === true) {
        return (
            <div className={contentRight.main_right}>
            <div className={contentRight.block_name}>
                <div>Friends</div>
                <NavLink className={contentRight.nav_link} to="/Friends/Find">
                        <div className={contentRight.find_people}>Find users</div>
                </NavLink>
            </div>
            <div className={contentRight.main_right2}>
                {FriendsFilter}
            </div>
        </div>
        )
      } else {
        return (
            <div className={contentRight.main_right}>
            <div className={contentRight.block_name}>
                <div>Friends</div>
                <NavLink className={contentRight.nav_link} to="/Friends/Find">
                        <div className={contentRight.find_people}>Find users</div>
                </NavLink>
            </div>
           <LoadingIcon />
        </div>
        )
    
      }
}

export default Friends_right;
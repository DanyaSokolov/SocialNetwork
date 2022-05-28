import React from "react";
import contentRight from './ContentRight.module.css';
import ContentRight_Profile from "./ContentRight_MyPosts/ContentRight_MyPosts.jsx";
import ContentRight_MyPosts from "./ContentRight_Profile/ContentRight_Profile.jsx";
import Content from "./Content/Content.jsx";
import LoadingIcon from "../../../LoadingIcon/LoadingIcon";

const Profile_right = (props) => {

    const ContentFilter = props.myPosts.map(el => <Content
        unLike={props.unLike}
        toLike={props.toLike}
        unSave={props.unSave}
        toSave={props.toSave}
        postId={el.id}
        liked={el.liked}
        saved={el.saved}
        key={el.id}
        text={el.text}
        name={el.name}
        logo={el.logo}
        user={el.user}
        me={props.user}
    />);
    
    if (props.isAuth === true) {
        return (
          <div className={contentRight.main_right}>
            <div className={contentRight.block_name}>Profile</div>
            <ContentRight_MyPosts setPhoto={props.setPhoto} login={props.login} logOutThunk={props.logOutThunk}
             getStatusThunk={props.getStatusThunk} status={props.status} updateStatusThunk={props.updateStatusThunk}
             user={props.user} getMyProfileThunk={props.getMyProfileThunk} photoCh={props.photoCh}
             updateMyProfileThunk={props.updateMyProfileThunk} id={props.id} />
            <ContentRight_Profile  />
            {ContentFilter}
          </div>
        )
      } else {
        return (
          <div className={contentRight.main_right}>
            <div className={contentRight.block_name}>Profile</div>
            <LoadingIcon />
          </div>
        )
    
      }
}


export default Profile_right;
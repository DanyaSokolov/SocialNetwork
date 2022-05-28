import React from "react";
import contentRight from './ContentRight.module.css';
import Content from "./Content/Content.jsx";
import Loading from "../../loading.png";

const ContentRight = (props) => {

  let ContentFilter = props.homePosts.map(el => <Content
     key={el.id} text={el.text} name={el.name} logo={el.logo} user={el.user}
     isMe={el.isMe}
     unLike={props.unLike}
     toLike={props.toLike}
     unSave={props.unSave}
     toSave={props.toSave}
     postId={el.id}
     liked={el.liked}
     saved={el.saved}
     me={props.user}
      />);

  if (props.isAuth === true) {
    return (
      <div className={contentRight.main_right}>
        <div className={contentRight.block_name}>Home</div>
        {ContentFilter}
      </div>
    )
  } else {
    return (
      <div className={contentRight.main_right}>
        <div className={contentRight.block_name}>Home</div>
        <div className={contentRight.loading_main}>
          <img className={contentRight.loading} src={Loading}></img>
        </div>
      </div>
    )

  }
}

export default ContentRight;
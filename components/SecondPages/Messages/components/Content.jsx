import React from "react";
import content from "./Content.module.css";

const Speakers = (props) => {
  return (
    <div className={content.user_main}>
      <div className={content.user_main2}>
        <img className={content.logo_user} src={props.user} />
        <div className={content.name}>{props.name}</div>
      </div>
    </div> 
  ) 
}

const ContentSpeaker = (props) => {

  const SpeakersFilter = props.speakers.map( el => <Speakers key={el.id} user={el.user} name={el.name} />);

  return (
    <div className={content.main_block}>
     <div className={content.main_block2}>
       { SpeakersFilter }
     </div>
    </div>
  )
}

export default ContentSpeaker;
import React from "react";
import contentRight from "./ContentRight_MyPosts.module.css";

const ContentRight_MyPosts = () => {
    return (
        <div>
          <div>
            <div className={contentRight.my_posts_main}>My posts</div>
          </div>
          <div className={contentRight.text_exp}>
             <textarea className={contentRight.inp_exp}></textarea>
          </div>
          <button className={contentRight.butt_exp}>Share</button>
        </div>
    )
}

export default ContentRight_MyPosts;
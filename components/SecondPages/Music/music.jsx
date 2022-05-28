import React from "react";
import music_s from "./music.module.css";
import Loading from "../../../loading.png";

let music = (props) => {
    return (
        <div className={music_s.main_right}>
            <div className={music_s.block_name}>Music</div>
            <div className={music_s.loading_main}>
                <img className={music_s.loading} src={Loading}></img>
            </div>
        </div>
    )
}

export default music;
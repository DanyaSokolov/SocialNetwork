import React from "react";
import settings_s from "./settings.module.css";
import Loading from "../../../loading.png";

let settings = (props) => {
    return (
        <div className={settings_s.main_right}>
            <div className={settings_s.block_name}>Settings</div>
            <div className={settings_s.loading_main}>
                <img className={settings_s.loading} src={Loading}></img>
            </div>
        </div>
    )
}

export default settings;
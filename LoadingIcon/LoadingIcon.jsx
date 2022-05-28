import React from "react";
import Loading from "../loading.png";
import ConIc from "./LoadingIcon.module.css"

const LoadingIcon = (props) => {
    return (
        <div className={ConIc.loading_main}>
            <img className={ConIc.loading} src={Loading}></img>
        </div>
    )
}

export default LoadingIcon;